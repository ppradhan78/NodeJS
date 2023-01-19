const express=require('express')
require('./config');
const dept=require('./dept');
const app=express();
app.use(express.json());

app.post('/create',async (req,resp)=>{
    let data=new dept(req.body);
   let  result= await data.save()
    resp.send(result);

})
app.get('/list',async (req,resp)=>{
   let  result= await dept.find();
    resp.send(result);

})
app.get('/delete/:_id',async (req,resp)=>{
    let  result= await dept.deleteOne(req.params);
     resp.send(result);
 
 })
 app.get('/update/:_id',async (req,resp)=>{
    let  result= await dept.updateOne(
        { DeptName:req.params},
        {$set:{DeptName:req.body}}
    );
     resp.send(result);
 
 })
app.listen(5001);