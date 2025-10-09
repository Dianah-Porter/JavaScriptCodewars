function *fibonnacci(num){
    let a = 0;
    let b = 1
while(a<=num){
    yield a;
    [a,b]=[b,a+b]
}
}
//const iterator = fibonnacci(10)
for(let n of fibonnacci(10)){
    console.log(n);
}