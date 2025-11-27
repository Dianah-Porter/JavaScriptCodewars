function firstDup (s) {
  // your solution here
  let count ={};

  for(let i of s){
      count[i] = (count[i] || 0) + 1;
  }
   for (const i of s) {
    if (count[i] >= 2) return i;
  }

  return undefined;
}