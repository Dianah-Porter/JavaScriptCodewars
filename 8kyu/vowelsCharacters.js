function isVow(a) {
  const vowels = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  };

  return a.map(num => vowels[num] || num);
}
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106],
     [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]));