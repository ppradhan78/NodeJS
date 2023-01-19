const dbConnect=require('./mongodb');

async function deleterec(){
    let db=await dbConnect();
    const result=await db.deleteOne({DeptName:'Operation1'});
    if(result.acknowledged){
        console.log('Record delete Successfully!')
    }
    else{
        console.log('Record delete Failed!')
    }
}
async function bulkdelete(){
    let db=await dbConnect();
    const result=await db.deleteMany({DeptName:'Operation'});
    if(result.acknowledged){
        console.log('Record delete Successfully!')
    }
    else{
        console.log('Record delete Failed!')
    }
}
bulkdelete()