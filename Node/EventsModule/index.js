const EventEmitter= require('events')
// const event= require('events')

const event= new EventEmitter();
event.emit('hello');

event.on("hello",()=>{
    console.log('hello click');
})
