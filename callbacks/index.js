// functions passed as arguments to other fns 
// allow you to differ the execution until an asynchronous fn is completed


// THIS IS AN EXAMPLE OF A CALLBCAK HELL (CALLBACK INSIDE ANOTHER CALLBACK)
// setTimeout(()=>{
//     setTimeout(()=>{

//     })
// })
import fs from "node:fs"

function person(name,callbcakFn){
    console.log(`Hello ${name}`);
    callbcakFn();
    
}

function address(){
    console.log('India');
}

person('Aryan',address)

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    console.log(data);
});