const http=require("http");

const server=http.createServer(
(req,resp)=>{
    if(req.url=="/")  {
        resp.end("Page loaded");
    }
    if(req.url=="/About")  {
        resp.end("About Page loaded");
    }
   //resp.end("responce end");
});

server.listen(8000,"10.147.208.61",()=>{
    console.log('Host is listing');
});