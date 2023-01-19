const express=require('express')
require('./config');
const dept=require('./dept');
const app=express();
app.use(express.json());

app.get('/search/:key',async (req,resp)=>{
    let  result= await dept.find(
    {
        "$or":[
            {"DeptName":{$regx:req.params.key}}
            // , {"DeptID":{$regx:req.params.key}}
            // ,{"Description":{$regx:req.params.key}}
        ]
    }
    );
     resp.send(result);
 })

app.listen(5002);