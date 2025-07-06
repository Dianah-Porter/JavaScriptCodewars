function insertCharAfterWords(sentence, char) {
    const words = sentence.split(" "); // Step 1
    const result = []; // Step 2
  
    for (let i = 0; i < words.length; i++) {
      result.push(words[i]); // Step 4
  
      if ((i + 1) % 3 === 0) {
        result.push(char);
      }
    }
  
    return result.join(" ");
  }   
  console.log(insertCharAfterWords("I love all of daughters they are so sweet", "*"));