 function maxProduct(a) {
  // ...
    const pair1 = Math.max(...a);    
    const max2 = a.splice(a.indexOf(pair1),1)
    return pair1 *  Math.max(...a);
} 
console.log(maxProduct([2,3,4,5,1]));
