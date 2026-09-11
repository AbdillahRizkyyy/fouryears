const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 4174);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.mpeg': 'audio/mpeg' };
const server = http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Invalid URL'); return; }
  const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = path.resolve(root, relative);
  const allowed = ['index.html', 'galeri.html', 'style.css', 'redesign.css', 'personal.css', 'gallery.css', 'script.js', 'gallery.js', 'gallery-data.js', 'music.js', 'music.css'].includes(relative) || relative.startsWith('assets/');
  if (!allowed || !file.startsWith(root + path.sep)) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
});
server.on('error', error => { console.error(error.code === 'EADDRINUSE' ? `Port ${port} sedang dipakai. Tutup server sebelumnya atau ubah PORT.` : error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Fouryears siap: http://127.0.0.1:${port}\nTekan Ctrl+C untuk berhenti.`));
