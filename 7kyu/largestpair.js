 function maxProduct(a) {
  // ...
  let sorted = a.sort((a,b)=> b-a);
  return sorted[0] * sorted[1]
}
console.log(maxProduct([2, 1, 5, 0, 4, 3])); 