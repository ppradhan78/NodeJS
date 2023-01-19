const express=require('express');
const app=express();

const reqFilters=(req,resp,next)=>{
   
    if(!req.query.age){
        resp.send('please provide age');
    }
    else if(req.query.age<13){
        console.log('you can not access the page')
    }
    else{
        next();
    }
   
}
app.use(reqFilters);
app.get('',(_,resp)=>{
    resp.send('Welcome to Home page')
})
app.get('/about',(_,resp)=>{
    resp.send('Welcome to Userpage page')
})
app.listen(5000)