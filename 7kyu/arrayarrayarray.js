function explode(x){
    let nbr;
    let arr = [];
if(x.every(e=> typeof(e) === 'number')){
 nbr = x.reduce((a,b) => a + b);
} 
else if(x.find(e => typeof(e) === 'number')){
    nbr = x.filter(n => typeof(n) === 'number' )[0];
    
}
else if(x.includes(0)){
    return [];
}
else{
    return "Void!";
}
for(let i=0; i< nbr; i++){
    arr.push(x);
}
return arr;
}
console.log(explode(['a', 3]))
// [ [ 0, 3 ], [ 0, 3 ], [ 0, 3 ] ]
console.log(explode(['a', 'b'])) //Void!
console.log(explode(['a', 0])) //[]