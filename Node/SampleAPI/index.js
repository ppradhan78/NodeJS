const http=require("http");

const server=http.createServer();
// 


server.on('request',(req,resp)=>{
    var fs=require('fs');
    fs.readFile('test.txt',(err,data)=>{
        if(err)
        return console.error(err);
        resp.end(data.toString())        
    })
})
server.listen(8001,"10.147.208.61",()=>{
    console.log('Host is listing');
});