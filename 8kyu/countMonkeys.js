function monkeyCount(n) {
  // Create an empty array to hold the numbers
  let result = [];

  // Loop from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  // Return the populated array
  return result;
}
console.log(monkeyCount(10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(monkeyCount(1));  // [1]

