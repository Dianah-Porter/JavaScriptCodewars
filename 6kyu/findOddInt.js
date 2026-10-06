function findOdd(A) {
  let count = {};
  for(let i of A ){
    count[i] = (count[i] || 0 ) + 1;
  }
  for( i in count) {
    if(Number(count[i]) % 2 !== 0) return Number(i);
  }
}