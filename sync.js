

//Synchronous means your code is executing line by line 
console.log('Learn');


//Compiler saw setTimeout and sends the whole code block to event loop so it runs after 'Success'
setTimeout(() => {
   console.log('Build');
},0);

console.log('Success');


