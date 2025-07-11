function findUnique(numbers) {
    // Return the unique number
  let unique = [...new Set(numbers)];
  if(unique.length === 1){
    return unique[0];
  }
  else{
    return numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))[0];
  }

}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));