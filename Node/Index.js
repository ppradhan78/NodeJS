 const express=require('express');
 const app=express();

 const path=require('path')
 const publicPath=path.join(__dirname,'public');
//app.use(express.static(publicPath))

app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('/About',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/Contactus',(_,resp)=>{
    resp.sendFile(`${publicPath}/Contactus.html`)
})
app.get('/login',(_,resp)=>{
   
    resp.render('login',);
})
app.get('/profile',(_,resp)=>{
    const users={
        name:'prasant kumar pradhan',
        email:'prasanta.pradhan@gmail.com',
        contactno:'9948777325',
        city:'hyderabad',
        skiles:['C#','AZURE','Angular','Core','ML','Node']
    };
    // resp.sendFile(`${publicPath}/profile.html`)
    resp.render('profile',{users});
    // resp.render('profile');
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})
 app.listen(5000)