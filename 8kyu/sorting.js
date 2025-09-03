function mergeArrays(a, b) {
  // your code here
 const sorted = [...a,...b].sort((a,b)=>a - b);
  return [...new Set(sorted)];
}