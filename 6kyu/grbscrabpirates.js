function grabscrab(anagram, dictionary) {
  // Your code here
  let anarg = anagram.split('').sort().join('');
  let words = [];
      for(let word of dictionary){
   if(word.split('').sort().join('') === anarg) words.push(word);
  }
  return words;
}
console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"]));