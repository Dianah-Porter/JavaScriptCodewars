
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;
  return average;
}

let array = [1, 3, 4, 5, 6];
console.log(findAverage(array));  // Output: 3.8


function removeChar(str){
    
    str.split();
    // str.shift();
    str.pop();
return str;
}
console.log(removeChar("country"));
