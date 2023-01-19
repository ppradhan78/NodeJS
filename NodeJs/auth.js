function registor(username){
    console.log(`UserNme: ${username}`);
}
function login(username,password){
    console.log(`UserNme: ${username}, Password: ${password}`);
}
// module.exports=registor;
module.exports={
    registor:registor,
    login:login
}
