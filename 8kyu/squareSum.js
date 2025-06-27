function squareSum(numbers){
  let sum = 0;
  for(let i =0; i < numbers.length; i++){
    let square = numbers[i] * numbers[i];
    sum += square;
  }
return sum
}

console.log(squareSum([1,2,2]));