// Pipes and Pipe Chaining

const fs = require('fs');
const readStream = fs.createReadStream('./static/example.txt','utf-8');
const writeStream = fs.createWriteStream('./example2.txt.gz');

const zlib = require('zlib');// Compressing files
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);// Compressed version of the read stream

const gunzip = zlib.createGunzip();
const readStream2 = fs.createReadStream('./example2.txt.gz');
const writeStream2 = fs.createWriteStream('uncompressed.txt','utf-8');
readStream2.pipe(gunzip).pipe(writeStream2);