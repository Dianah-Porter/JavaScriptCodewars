 function removeHighestOccurrence(arr) {
    const count = {};
  
    // Step 1: Count occurrences
    for (let el of arr) {
      count[el] = (count[el] || 0) + 1;
    }
  
    // Step 2: Find max occurrence
    const maxCount = Math.max(...Object.values(count));
  
    // Step 3: Find elements with that count
    const toRemove = Object.keys(count).filter(key => count[key] === maxCount);
  
    // Step 4: Return new array without the most frequent element(s)
    return arr.filter(el => !toRemove.includes(String(el)));
  } 

  
  function removeOccurence(arr){
    let count = {};
    for(let num of arr){
        count[num] = (count[num] || 0) +1;
    }
    
    let max = 0;
    let mostFrequent;
    for(let key in count){
        if(count[key] > max){
            max = count[key];
            mostFrequent = Number(key);
            
        }
        
    }
    return arr.filter(num => num !== mostFrequent);
}
console.log(removeOccurence([1,2,3,3,3,2,4]));  