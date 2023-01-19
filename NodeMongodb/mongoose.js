const mongoose=require('mongoose')

const url='mongodb://localhost:27017/Northwind';
const deptSchema=new mongoose.Schema(
    {
        DeptName:String,
        DeptID:String,
        Description:String
    }
);
async function saveData(){
    await mongoose.connect(url);
   
    const DeptModel=mongoose.model('Dept',deptSchema);
    let data=new DeptModel({DeptName:"IT",DeptID:5,Description:"IT desc"});
    let result=await data.save();
   console.log(result);
}
async function UpdateData(){
    const DeptModel=mongoose.model('Dept',deptSchema);
    let result=await DeptModel.updateOne(
        {DeptName:"IT"},
        {$set:{DeptName:"Information Tech"}}
    );
   console.log(result);
}

async function deleteData(){
    const DeptModel=mongoose.model('Dept',deptSchema);
    let result=await DeptModel.deleteOne(
        {DeptName:"IT"}
    );
   console.log(result);
}

async function findData(){
    const DeptModel=mongoose.model('Dept',deptSchema);
    let result=await DeptModel.find();    
   console.log(result);
}
findData();
//deleteData();
//UpdateData();
//saveData();

