function sum (numbers) {
  if (numbers.length === 0){
    return 0
  }
  else{
    return numbers.reduce((acc, item)=> acc + item,  0); 
  }
  
}
console.log(sum([1,3.4,5,3]))