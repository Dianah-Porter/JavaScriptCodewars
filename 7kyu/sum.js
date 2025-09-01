function sum(...args) {
  // return the sum of all arguments given.
  return [...args].reduce((a,b)=> a + b);
}
