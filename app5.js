// Working with the File System Module, pt 2

const fs = require('fs');

// Create file in directory
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('./tutorial/example.txt',"123",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('Successfully created file');
            }
        })
    }
})

// Delete folder with file
fs.unlink('./tutorial/example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('Deleted folder');
            }
        })
    }
})

// Delete many files in folder
fs.readdir('tutorial',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./tutorial/' + file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Successfully deleted file');
                }
            })
        }
    }
})