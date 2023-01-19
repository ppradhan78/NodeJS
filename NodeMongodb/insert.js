const dbConnect=require('./mongodb');

async function insert(){

    let db=await dbConnect();
    //  const result=await db.insert({DeptID:10, DeptName:"Phrama", Description:"Phrama"})
    const result=await db.insertOne({DeptID:11, DeptName:"Operation", Description:"Operation"})
    if(result.acknowledged){
        console.log('Record Inserted Successfully!')
    }
    else{
        console.log('Record Inserted Failed!')
    }
}
// insert();
async function bulkInsert(){

    let db=await dbConnect();
    
    const result=await db.insertMany(
        [
            {DeptID:13, DeptName:"Operation1", Description:"Operation"},
            {DeptID:14, DeptName:"Operation2", Description:"Operation"}
        ]
       
        )
    if(result.acknowledged){
        console.log('Record Inserted Successfully!')
    }
    else{
        console.log('Record Inserted Failed!')
    }
}
bulkInsert();