const {MongoClient}=require('mongodb')
// const {MongoClient}=require('mongodb').MongoClient
const url='mongodb://localhost:27017';
const database='Northwind'
const client= new MongoClient(url);

async function dbConnection(){
    let result=await client.connect();
   let db= result.db(database);
    return db.collection('Dept');
}

async function getData(){
    // dbConnection().then((resp)=>{
    //         resp.find().toArray().then((data)=>{
    //             console.log(data)
    //         })  
    //     })
    let data=await dbConnection();
    data=await data.find().toArray();
    console.log(data)
}
 module.exports=dbConnection;