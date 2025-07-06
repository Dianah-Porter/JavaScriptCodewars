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