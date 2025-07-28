function longestWord(sentence){
    const words = sentence.split(" ");   // the space in split(" ") matters!!!!!!!!!!!
    let longest = "";
    for(let word of words){
        // console.log(word);
        if(word.length > longest.length ){
            longest = word;
        }
    }
    let reverse = longest.split('').reverse().join('');
    
    return reverse.charAt(0).toUpperCase() + reverse.slice(1).toLowerCase();
}
console.log(longestWord("I love Javascript"));