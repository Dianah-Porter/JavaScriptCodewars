function reverseWords(str) {
  // Go for it
 
  return str
  .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}
console.log(reverseWords("This is an example!")); 
// ==> "sihT si na !elpmaxe"