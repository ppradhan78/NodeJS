const dbConnect=require('./mongodb');

async function update(){
    let db=await dbConnect();
    const result=await db.updateOne(
        {
            DeptName:'Operation2'},{
            $set:{DeptName:'Operation mgmt'}
        }
    );
    if(result.acknowledged){
        console.log('Record upfate Successfully!')
    }
    else{
        console.log('Record upfate Failed!')
    }
}

async function bulkUpdate(){
    let db=await dbConnect();
    const result=await db.update(
        [
            {
                DeptName:'Operation'},{
                $set:{DeptName:'Operations'}
            },
            {
                DeptName:'Operation2'},{
                $set:{DeptName:'Operations'}
            }
        ]
       
    );
    if(result.acknowledged){
        console.log('Record upfate Successfully!')
    }
    else{
        console.log('Record upfate Failed!')
    }
}
//update();
//bulkUpdate();