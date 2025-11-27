
var isSquare = function(arr){
  //Are they square?
  let square;
  if(arr.length == 0) return undefined;
 for(let i of arr.flat(Infinity)){
     square = Math.sqrt(i);
     if(!Number.isInteger(square)) return false; 
 }
 return true
}


const isSquare = (arr)=>arr.length?
      arr.flat(Infinity).every(i=>Number.isInteger(Math.sqrt(i))):undefined;