import EventEmitter from "node:events";

 const myFirstEmitter = new EventEmitter();

 //BASIC EXAMPLE
//  myFirstEmitter.on('start', () => {
//   console.log('started');
// });

// myFirstEmitter.emit('start');


//EXAMPLE BY TAKING ARGUMENT
// myFirstEmitter.on('start', number => {
//   console.log(`started ${number}`);
// });

// myFirstEmitter.emit('start', 23);



//MULTIPLE ARGUMENTS
// myFirstEmitter.on('start', (start, end)=>{
//     console.log(`started from ${start} to ${end}`);
// })

// myFirstEmitter.emit('start', 1, 100);


