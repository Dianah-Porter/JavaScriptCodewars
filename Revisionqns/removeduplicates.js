function removeDuplicates(arr){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(!new_arr.includes(arr[i])){
            new_arr.push(arr[i]);
        }
    }
    
return new_arr;
    
}
console.log(removeDuplicates(['a', 'b', 'b', 'c', 'd', 'd', 'e']));

/* let arr = [1,2,3,3,3,4];
let newArr = [...new set(arr)];
console.log(newArr); */