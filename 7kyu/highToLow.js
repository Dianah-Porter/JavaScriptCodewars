function highAndLow(numbers){
    let num = numbers.split(' ').map(Number);
    let max = Math.max(...num);
    let min = Math.min(...num);
    return max + ' ' +min
}
console.log(highAndLow("1 2 3 4 5"));
