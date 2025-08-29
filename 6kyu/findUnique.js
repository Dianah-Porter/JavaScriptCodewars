function findUniq(arr) {
  let count = {};
  for(let num of arr ){
     count[num] = (count[num] || 0) + 1;
  }
for(let key in count){
    if(count[key] === 1){
        return Number(key);
    }
} 
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

function findUnique(arr){
    return arr.filter(e=>arr.indexOf(e)=== arr.lastIndexOf(e))[0];
}
console.log(findUnique([ 1, 1, 1, 2, 1, 1 ]))