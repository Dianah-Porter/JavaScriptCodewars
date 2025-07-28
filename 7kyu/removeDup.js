function removeDuplication(arr){
 // Here you Go!
 let count = {};
 let result = [];
 for(let num of arr){
    count[num] = (count[num] || 0 ) + 1;
 }
 let max = 0;
 for(let key in count){
    if(count[key] === 1){
        result.push(Number(key));
    }
 }
  return result;
}
console.log(removeDuplication([1,2,3,2,4,6,2,6,7])) //[1,3,4,7]