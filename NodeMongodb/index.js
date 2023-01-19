/* 
const {MongoClient}=require('mongodb')
// const {MongoClient}=require('mongodb').MongoClient
const url='mongodb://localhost:27017';
const database='Northwind'
const client= new MongoClient(url);

async function getData(){
    let result=await client.connect();
   let db= result.db(database);
   let collection=db.collection('Dept');
//    let responce=await collection.find({}).toArray()
let responce=await collection.find({DeptName:'IT'}).toArray()
   console.log(responce);
}

getData();
*/

const dbConnect=require('./mongodb')
async function getData(){

    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
}
getData();