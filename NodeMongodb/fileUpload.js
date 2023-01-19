const express=require('express')
const multer=require('multer')
const app=express();



const upload=multer({
    Storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");
app.post('/upload',upload,async (req,resp)=>{
//     let data=new dept(req.body);
//    let  result= await data.save()
//     resp.send(result);
resp.send("result");
})

app.listen(5002);