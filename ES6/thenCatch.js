let p = new Promise(function(resolve, reject){
    setTimeout(()=> resolve('done!'), 1000);
});
p.then(( message => console.log(message)
)).catch((error) => console.log(error));

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.finally(() => console.log("Promise ready"))   