function sumMul(n,m){
//your idea here
const multiples = [];
if(m <= 0) return "INVALID";
for(let i = n; i <= m; i++){
    if(i % n === 0){
        multiples.push(i);
    }
}
return multiples.reduce((a,b)=> a + b);
}
console.log((sumMul(61, 10553)))//  ==> 2 + 4 + 6 + 8 = 20