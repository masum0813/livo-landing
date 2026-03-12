import http from 'node:http';
import {spawn} from 'node:child_process';
import process from 'node:process';
import httpProxy from 'http-proxy';

const PUBLIC_PORT = 3000;

const proxy = httpProxy.createProxyServer({
  ws: true,
  changeOrigin: true,
});

let shuttingDown = false;
const children = new Set();
const readyLocales = new Set();

function isTurkishRequest(req) {
  const url = req.url || '/';
  const referer = req.headers.referer || '';

  return url === '/tr' || url.startsWith('/tr/') || referer.includes('/tr');
}

function getTarget(req) {
  return isTurkishRequest(req) ? TR_TARGET : EN_TARGET;
}

function log(message) {
  process.stdout.write(`${message}\n`);
}

function logError(message) {
  process.stderr.write(`${message}\n`);
}

function maybeLogReady(locale) {
  readyLocales.add(locale);

  if (readyLocales.has('en') && readyLocales.has('tr')) {
    log(`Development site is ready at http://localhost:${PUBLIC_PORT}`);
    log('Locales: / and /tr/');
  }
}

function filterLine(locale, line) {
  if (!line.trim()) {
    return;
  }

  if (line.includes('website is running at:')) {
    maybeLogReady(locale);
    return;
  }

  if (line.includes('Starting the development server...')) {
    return;
  }

  if (line.includes('[webpackbar]') || line.includes('compiled successfully')) {
    return;
  }

  log(`[${locale}] ${line}`);
}

function pipeOutput(stream, locale) {
  let buffer = '';

  stream.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() ?? '';

    lines.forEach((line) => filterLine(locale, line));
  });

  stream.on('end', () => {
    if (buffer.trim()) {
      filterLine(locale, buffer);
    }
  });
}

function shutdown(code = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  server.close();

  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }

  setTimeout(() => {
    for (const child of children) {
      if (!child.killed) {
        child.kill('SIGKILL');
      }
    }

    process.exit(code);
  }, 1000).unref();
}

function startLocaleServer(locale, port, generatedDir) {
  const child = spawn(
    'npx',
    ['docusaurus', 'start', '--locale', locale, '--port', String(port), '--no-open'],
    {
      cwd: process.cwd(),
      env: {
        ...process.env,
        DOCUSAURUS_GENERATED_FILES_DIR_NAME: generatedDir,
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  children.add(child);
  pipeOutput(child.stdout, locale);
  pipeOutput(child.stderr, locale);

  child.on('exit', (code, signal) => {
    children.delete(child);

    if (shuttingDown) {
      return;
    }

    const reason = signal ? `signal ${signal}` : `code ${code}`;
    logError(`[${locale}] dev server exited unexpectedly with ${reason}`);
    shutdown(code ?? 1);
  });
}

proxy.on('error', (error, req, res) => {
  const url = req?.url || '/';
  const message = `Dev proxy could not reach upstream for ${url}: ${error.message}`;

  if (res && typeof res.writeHead === 'function' && !res.headersSent) {
    res.writeHead(502, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(message);
    return;
  }

  if (res && typeof res.destroy === 'function') {
    res.destroy();
  }

  logError(message);
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, {target: getTarget(req)});
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head, {target: getTarget(req)});
});

server.on('error', (error) => {
  logError(`Dev server failed: ${error.message}`);
  shutdown(1);
});

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

server.listen(PUBLIC_PORT, () => {
  log(`Starting development site on http://localhost:${PUBLIC_PORT}`);
});