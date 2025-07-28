function mergeArrays(arr1, arr2) {
  const sorted = [...arr1, ...arr2].sort((a,b) => a - b);
  return [...new Set(sorted)];
}
console.log(mergeArrays([1,2,4,5,6], [8,4,3,1]));