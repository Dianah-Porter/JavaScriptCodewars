function factorial(n)
{
  // Calculate the factorial here
  if(n < 0 ){
    return "INVALID";
  } 
  else if(n === 0 || n === 1){
    return 1;
  }
  
  else{
  let result = 1;
 
  for(let i = n; i >= 1; i--){
    result *= i;
  }
  return result;
}
  
}
console.log(factorial(5));

/*

function factorial(n)
{
  // Calculate the factorial here
  if(n < 0 ){
    return "INVALID";
  } 
  else if(n === 0 || n === 1){
    return 1;
  }
  
  else{
  return n * factorial(n-1);
}
  
}*/