function smallEnough(a, limit){
    return a.every(x => x  <= limit);
}
console.log(smallEnough([1,2,3,5,6], 7));