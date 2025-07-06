function sumUnique(arr){
    let unique = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    // for(let j = 0; j < unique.length; j++){
    //     sum += unique[j];
    // }                                         // you can return sum after computing it 

    return unique.reduce((acc ,val) => acc + val, 0);
}
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(sumUnique(array));