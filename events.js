const events=require('events')
var eventEmitter= new events.EventEmitter
//Create an event handler:
var myEventHandler= function (){
console.log(' iam handler ')
}
//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler)
//Fire the 'scream' event:
eventEmitter.emit('scream')


