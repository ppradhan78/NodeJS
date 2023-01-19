// const chalk= require('chalk');
// console.log(chalk.blue('Hello world!'));

const validator= require('validator');
console.log(validator.isEmail('a@a@aa.aa'));
console.log(validator.isEmail('banc@aa.aa'));
