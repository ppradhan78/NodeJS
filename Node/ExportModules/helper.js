function Add(num1,num2){
    return num1+num2;
}
function Sub(num1,num2){
    return num1-num2;
}
function Mul(num1,num2){
    return num1*num2;
}
function Div(num1,num2){
    return num1/num2;
}
function Mod(num1,num2){
    return num1%num2;
}
// module.exports=Add;
module.exports.Add=Add;
module.exports.Sub=Sub;
module.exports.Mul=Mul;
module.exports.Div=Div;
module.exports.Mod=Mod;

