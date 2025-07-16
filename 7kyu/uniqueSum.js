function uniqueSum(lst){
  //your magic code goes here
  if(lst.length === 0){
    return null
  }
  else{
    let unique = [...new Set(lst)];
  return unique.reduce((a,b)=> a + b, 0);
  }
  
}
console.log(uniqueSum([ 1, 3, 8, 1, 8]));
