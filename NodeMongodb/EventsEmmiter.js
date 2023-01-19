const express=require('express');
const EventEmitter=require('events');
const app=express();
const event=new EventEmitter();

let count=0
event.on("getApi",()=>{
    count++;
    console.log("getApi call",count)
})
app.get('/',async (req,resp)=>{
     resp.send("get call");
     event.emit("getApi")
 });
 app.get('/search',async (req,resp)=>{
    resp.send("search call");
});
app.get('/update',async (req,resp)=>{
    resp.send("update call");
});
app.listen(5002);