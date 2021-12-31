const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,age)=>{
    console.log(`Data received ${name} and ${age}`);
})

customEmitter.on('response',()=>{
    console.log(`Some other ${year}logic here`);
})

customEmitter.emit('response','Oguz',27)
