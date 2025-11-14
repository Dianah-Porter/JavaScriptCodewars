function sumArray(array) {
  return !Array.isArray(array) || array.length <= 2? 0: array.sort((a,b)=> a - b).slice(1,-1).reduce((a,b)=> a+b, 0);
}
