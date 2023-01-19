const { Console } = require("console");

const path= require("path");

// console.log(path.dirname('C:\Prasanta\Other\Demo\Node\path\index.js'))
// console.log(path.extname('C:\Prasanta\Other\Demo\Node\path\index.js'))
// console.log(path.basename('C:\Prasanta\Other\Demo\Node\path\index.js'))
// console.log(path.parse('C:\Prasanta\Other\Demo\Node\path\index.js'))

const values=path.parse('C:\Prasanta\Other\Demo\Node\path\index.js');
console.log(values.ext);


