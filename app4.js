// Working with the File System Module

const fs = require('fs');

// Create file
fs.writeFile('test.txt',"this is an example",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File succesfully created');
        fs.readFile('test.txt','utf8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        })
    }
});

// Rename file
fs.rename('test.txt','test2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully renamed the file');
    }
});

// Append data
fs.appendFile('test2.txt','\nSome data being appended',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully appended data to file');
    }
})

// Delete file
fs.unlink('test2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully deleted the file');
    }
})