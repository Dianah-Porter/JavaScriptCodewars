function onlyDuplicates(str) {
  // your code here
  let count = {};
  let splitted = str.split('');
  
  
  for(let i of splitted){
    count[i] = (count[i] || 0) + 1;
    console.log(i);
    
  }

  let result = '';
 for(let key of splitted){
  if(count[key] > 1){
    result += key;
  }
 }

  return result;
} 
console.log(onlyDuplicates("abccdefee")); //output: "cceee"