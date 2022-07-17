// Serving Static Files with Http and File System Modules

const http = require('http');
const fs = require('fs');

// index.html
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);


// example.json
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200,{'Content-type': 'application/json'});
    readStream.pipe(res);
}).listen(3000);


// example.png
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/example.jpg');
    res.writeHead(200,{'Content-type': 'image/jpg'});
    readStream.pipe(res);
}).listen(3000);