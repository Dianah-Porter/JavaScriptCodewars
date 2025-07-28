function removeEveryOther(arr){
  //your code here
  let result = [];
  for(let elem = 0; elem < arr.length; elem++){
    if(elem % 2 === 0){
        result.push(arr[elem]);
    }

  }
return result;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))