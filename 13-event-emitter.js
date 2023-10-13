//EventEmitter class from events MODULE
const EventEmitter = require('events')

//create instance of the class
const customEmitter = new EventEmitter()

//first listen to event, we can also add arguments
customEmitter.on('response', (name, id) => {
    console.log(`data recieved, ${name} with id:${id}`)
})

//MANY methods can be made on same event(response) with different logic
customEmitter.on('response', () => {
    console.log('new data recieved')
})

//after listening emit(trigger) the event
customEmitter.emit('response', 'Manoj', 46)