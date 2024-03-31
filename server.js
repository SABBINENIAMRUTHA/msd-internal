const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const requestListener = function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.method === 'GET') {
        res.end('Welcome to Node Js with GET Method');
    }
    if (req.method === 'POST') {
        res.end('Welcome to Node Js with POST Method');
    }
}
    const server = http.createServer(requestListener);
    server.listen(port, hostname);