function oddOrEven(array) {
   //enter code here
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  if(sum % 2 === 0) {
    return "even"
  }
  else{
    return "odd"
  }
}

console.log(oddOrEven([2,3,1]))