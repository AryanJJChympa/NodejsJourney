function delayFn(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}

console.log('Promise lecture starts');
delayFn(2000).then(()=>
    console.log('after 2 seconds promise resolved'));
    console.log('End');
    
function divideFn(n1,n2){
    return new Promise((resolve,reject)=>{
        if(n2===0){
            reject('cant divide by 0')
        }else{
            resolve(n1/n2);
        }
    })
}

divideFn(10,0)
.then((result)=>console.log(result))
.catch((error)=>console.log(error,'err'));



  