function sortArray(array) {
  // Return a sorted array.
  let odds = array.filter(x => x % 2 !== 0).sort((a,b) => a - b);
  console.log(odds);
  return array.map(x => x % 2 !== 0 ? odds.shift() : x);
}
console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]))