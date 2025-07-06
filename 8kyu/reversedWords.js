function reverseWords(str){
  str = str.split(' ').reverse().join(' ');  //space in split to leave space with in output string
  return str; // reverse those words
  
}
console.log(reverseWords("I love Javascript"));