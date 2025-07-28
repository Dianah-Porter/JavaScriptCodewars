function onlyDuplicates(str) {
  // your code here
  let count = {};
  let splitted = str.split('');
  
  for(let i of splitted){
    count[i] = (count[i] || 0) + 1;
    
  }
  let max =  0;
  let duplicates;
    for(let key in count){
        if(count[key] > max){
            max = count[key];
            duplicates = toString(key);

        }
    }

  return duplicates.split('').filter(num => num === max);
} 
console.log(onlyDuplicates("abccdefee")); //output: "cceee"