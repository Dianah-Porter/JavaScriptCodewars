Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
};
var arr =[1,2,3,4]
console.log(arr.sum())