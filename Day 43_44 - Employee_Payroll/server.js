const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            fs.writeFileSync(path.join(__dirname, 'Employee.json'), body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
        });
        return;
    }
    
    // Serve static files
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
    }
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (req.url === '/Employee.json') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end('[]');
            } else {
                res.writeHead(404);
                res.end('Not found');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(3000, () => console.log('Server running at http://localhost:3000/'));
