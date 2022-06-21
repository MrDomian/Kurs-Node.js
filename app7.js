// Why you should use Streams?

const fs = require('fs');

// Read large file
const readStream = fs.createReadStream('./Tutorial.txt', 'utf8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
})