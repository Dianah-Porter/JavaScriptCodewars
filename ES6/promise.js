let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a === 2){
        resolve('Success');
    }
    else{
        reject('Failed');
    }
})
p.then((msg) => console.log('This is in then ' + msg)) //This is in then Success   //then calls resolve 
.catch((msg) => console.log('This is in the catch ' + msg)) //to handle errors 