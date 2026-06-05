const http = require('http');
const fs = require('fs');
const path = require('path');

const frontendRoot = path.join(__dirname, '..', 'frontend');
const port = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain'
};

function getMime(filePath) {
    return mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function sendFile(res, filePath) {
    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Archivo no encontrado');
            return;
        }
        res.writeHead(200, { 'Content-Type': getMime(filePath) });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const requestUrl = decodeURI(req.url.split('?')[0]);
    let filePath = requestUrl === '/' ? path.join(frontendRoot, 'index.html') : path.join(frontendRoot, requestUrl);

    filePath = path.normalize(filePath);

    if (!filePath.startsWith(frontendRoot)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Acceso prohibido');
        return;
    }

    fs.stat(filePath, (error, stats) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Recurso no encontrado');
            return;
        }

        if (stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        sendFile(res, filePath);
    });
});

server.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
