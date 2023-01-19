const express=require('express')
const dbConnect=require('./mongodb')
const app=express();

app.use(express.json());

app.get('/',async (req,resp)=>{
    let data=await dbConnect();
    data=await  data.find({}).toArray();
resp.send(data)

})

app.post('/',async (req,resp)=>{
    let data=await dbConnect();
     data=data.insertOne(req.body);
    resp.send(data);

})

app.put('/',async (req,resp)=>{
    let data=await dbConnect();
     data=data.updateOne(
        {
            DeptName:req.body.DeptName},{
            $set:{DeptName:req.body.DeptName}
        },

     );
    resp.send(data);

})
app.delete('/',async (req,resp)=>{
    let data=await dbConnect();
     data=data.deleteOne(
        {DeptName:req.body.DeptName}
     );
    resp.send(data);

})
app.listen(5000);