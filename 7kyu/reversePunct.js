function esrever(str) {
  let punctuation = "";
  let lastChar = str[str.length - 1];
  if(['?','!','.',','].includes(lastChar)){
          punctuation = lastChar;
          str = str.slice(0,-1);
  }
    return str.split('').reverse().join('') + punctuation;
}
console.log(esrever("hello world?")); //"dlrow olleh."