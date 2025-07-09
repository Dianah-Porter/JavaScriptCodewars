function twoOldestAges(ages){
    let result = [];
    result = ages.sort((a,b) => a - b).reverse().slice(0,2);
    return result.sort((a,b) => a - b);
    
}
console.log(twoOldestAges([1, 2, 10, 8])); // [8, 10]
