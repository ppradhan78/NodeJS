const data={
    name:"Pasanta",
    age:31,
    couses:["node","React","Angular","Mongo"]
};
const jsondata=JSON.stringify(data);
console.log(jsondata);
console.log(JSON.parse(jsondata));