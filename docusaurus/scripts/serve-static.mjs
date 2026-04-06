import {createReadStream, existsSync, readFileSync, statSync} from 'node:fs';
import {createServer} from 'node:http';
import {extname, join, normalize} from 'node:path';

const HOST = process.env.HOST ?? '0.0.0.0';
const PORT = Number(process.env.PORT ?? 3000);
const ROOT = normalize(join(process.cwd(), 'build'));
const REDIRECTS_PATH = normalize(join(ROOT, '_redirects'));

const CONTENT_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

function loadRedirects() {
  if (!existsSync(REDIRECTS_PATH)) {
    return new Map();
  }

  const redirectLines = readFileSync(REDIRECTS_PATH, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

  return new Map(
    redirectLines
      .map((line) => line.split(/\s+/))
      .filter((parts) => parts.length >= 3)
      .map(([from, to, status]) => [from, {to, status: Number(status)}]),
  );
}

const REDIRECTS = loadRedirects();

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0] || '/');
  const candidate = normalize(join(ROOT, decoded));

  if (!candidate.startsWith(ROOT)) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }

  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    const indexPath = join(candidate, 'index.html');
    if (existsSync(indexPath)) {
      return indexPath;
    }
  }

  const htmlPath = normalize(join(ROOT, `${decoded}.html`));
  if (htmlPath.startsWith(ROOT) && existsSync(htmlPath)) {
    return htmlPath;
  }

  const nestedIndexPath = normalize(join(ROOT, decoded, 'index.html'));
  if (nestedIndexPath.startsWith(ROOT) && existsSync(nestedIndexPath)) {
    return nestedIndexPath;
  }

  return null;
}

function sendFile(res, filePath, statusCode = 200) {
  const extension = extname(filePath);
  const contentType = CONTENT_TYPES[extension] ?? 'application/octet-stream';
  const stat = statSync(filePath);

  res.writeHead(statusCode, {
    'Content-Length': stat.size,
    'Content-Type': contentType,
    'Cache-Control': extension === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable',
  });

  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  const method = req.method ?? 'GET';
  const requestUrl = req.url || '/';
  const pathname = decodeURIComponent(requestUrl.split('?')[0] || '/');

  if (method !== 'GET' && method !== 'HEAD') {
    res.writeHead(405, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Method Not Allowed');
    return;
  }

  const redirect = REDIRECTS.get(pathname);
  if (redirect) {
    res.writeHead(redirect.status, {
      Location: redirect.to,
      'Cache-Control': 'public, max-age=3600',
    });
    res.end();
    return;
  }

  const filePath = resolvePath(requestUrl);

  if (filePath) {
    if (method === 'HEAD') {
      const extension = extname(filePath);
      const contentType = CONTENT_TYPES[extension] ?? 'application/octet-stream';
      const stat = statSync(filePath);
      res.writeHead(200, {
        'Content-Length': stat.size,
        'Content-Type': contentType,
        'Cache-Control': extension === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable',
      });
      res.end();
      return;
    }

    sendFile(res, filePath);
    return;
  }

  const notFoundPath = join(ROOT, '404.html');
  if (existsSync(notFoundPath)) {
    if (method === 'HEAD') {
      const stat = statSync(notFoundPath);
      res.writeHead(404, {
        'Content-Length': stat.size,
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      });
      res.end();
      return;
    }

    sendFile(res, notFoundPath, 404);
    return;
  }

  res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Not Found');
});

server.listen(PORT, HOST, () => {
  process.stdout.write(`Serving Docusaurus build on http://${HOST}:${PORT}\n`);
});
