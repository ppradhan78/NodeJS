const mongoose=require('mongoose')
const deptSchema=new mongoose.Schema(
    {
        DeptName:String,
        DeptID:String,
        Description:String
    }
);
module.exports=mongoose.model('Dept',deptSchema);