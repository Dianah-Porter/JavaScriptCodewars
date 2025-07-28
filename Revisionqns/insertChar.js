function insertCharAfterWords(sentence, char){
    let words = sentence.split(' ');
    let result = [];
    for(let i = 0; i < words.length; i++){
        result.push(words[i]);
        if((i + 1) % 3 === 0){
          result.push(char);
        }
    }
    return result.join(' ');
}
let insert = insertCharAfterWords("The quick brown fox jumps over the lazy dog", "*");
// "The quick brown* fox jumps over* the lazy dog*"
console.log(insert);

  /* function insertCharAfterWords(sentence, char) {
    const words = sentence.split(" "); // Step 1
    const result = []; // Step 2
  
    for (let i = 0; i < words.length; i++) {
      result.push(words[i]); // Step 4
  
      // Step 5: After every 3rd word, insert the character
      if ((i + 1) % 3 === 0) {
        result.push(char);
      }
    }
   
    return result.join(" "); // Step 6 & 7
  }   */