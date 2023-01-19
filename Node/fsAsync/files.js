const fs= require("fs");

//fs.writeFile('test.txt',"sample Text",(error)=>{console.log('File created.')});

//fs.appendFileSync('test.txt',"sample Text Add conentet.",(error)=>{console.log('File appender.')});

//read file
//var content=fs.readFile('test.txt','utf-8',(error,data)=>{console.log(data)});

fs.mkdir("Test12",(error)=>{console.log("error creating dir")});
