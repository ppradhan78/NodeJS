const color=require('cli-color')
const nodemon=require('nodemon')
const user=require('./auth')


console.log(color.red('Hello World'))
console.log(color.red(user.registor('Jon')))
console.log(color.red(user.login('Jon','123')))

