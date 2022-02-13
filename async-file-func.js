const {readFile, writeFile} = require('fs');


// Callback has been used because of async 
readFile("./text-files/first.txt",'utf-8', (err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
})

// Asyn function for writing in existing file or creating new file
writeFile("./text-files/result-async.txt",
    `Here is the async written file`,
    (err,res)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(res);
})






