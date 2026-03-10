function common(a,b,c){
  let countB = {};
  let countC = {};
  let sum = 0;
  
  for(let i of b) countB[i] = ( countB[i] || 0) + 1;
  for(let i of c) countC[i] = (countC[i] || 0) + 1;
  
  for(let num of a){
    if(countB[num]>0 && countC[num] >0 ){
      sum += num;
      countB[num]--;
      countC[num]--;
    }
  }
  return sum;
}

console.log(common([1,2,3],[5,3,2],[7,3,2]));