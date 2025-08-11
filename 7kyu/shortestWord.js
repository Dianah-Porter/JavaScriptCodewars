function findShort(s){
    let words = s.split(' ');
    let min = words[0].length;
    let short = '';
    for(let word of words){
        if(word.length < min){
            min = word.length;
        }
    }
    return min;
}
console.log(findShort("I love my family "));