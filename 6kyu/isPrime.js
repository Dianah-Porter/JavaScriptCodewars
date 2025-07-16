
function isPrime(num) {
  if (num === 1){
    return false;
  }
  else  if(num % 1 === 0 && num % num === 0){
    return true;
  }
  else{
    return false;
  }
}
console.log(isPrime(10));

