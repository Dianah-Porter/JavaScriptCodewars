function sumTwoSmallestNumbers(numbers) {  
  let result = numbers.sort((a,b) => a - b);
  for(let i=0; i < result.length; i++){
    return result[0] + result[1]
  }
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));