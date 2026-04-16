import http from 'node:http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  ws: true,
  changeOrigin: true,
});

const PORT = 3000;
const EN_TARGET = 'http://localhost:3001';
const TR_TARGET = 'http://localhost:3002';

function isTurkishRequest(req) {
  const url = req.url || '/';
  const referer = req.headers.referer || '';

  if (url === '/tr' || url.startsWith('/tr/')) {
    return true;
  }

  if (url === '/' || url.endsWith('.html')) {
    return false;
  }

  if (referer.includes('/tr')) {
    return true;
  }

  return false;
}

function getTarget(req) {
  return isTurkishRequest(req) ? TR_TARGET : EN_TARGET;
}

proxy.on('error', (error, req, res) => {
  const url = req?.url || '/';
  const message = `Dev proxy could not reach upstream for ${url}: ${error.message}`;

  if (res && !res.headersSent) {
    res.writeHead(502, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(message);
    return;
  }

  console.error(message);
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, {target: getTarget(req)});
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head, {target: getTarget(req)});
});

server.listen(PORT, () => {
  console.log(`Docusaurus dev proxy listening on http://localhost:${PORT}`);
  console.log(`EN upstream: ${EN_TARGET}`);
  console.log(`TR upstream: ${TR_TARGET}`);
});
