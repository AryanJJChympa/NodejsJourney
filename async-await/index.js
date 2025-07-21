function delayFn(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}

async function delayedGreet(name) {
    await delayFn(2000);
    console.log(name);
}

delayedGreet("aryan");

async function division(n1,n2) {
    try{
        if(n2===0){
            throw new Error('Cannot divide by 0');
        }else{
            return n1/n2;
        }
    }catch(error){
        console.log("Error");
        return null;
    }
}

async function mainFn() {
    console.log(await division(10,2));
    console.log(await division(10,0));   
}

mainFn();
