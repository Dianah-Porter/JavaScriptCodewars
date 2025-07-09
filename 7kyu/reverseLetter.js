function reverseLetter(str) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    result = '';
    for(let i = 0; i < str.length; i++){
        if(alphabets.includes(str[i])){
            result += str[i];
        }    
    }

return result.split('').reverse().join(''); 
  
}
console.log(reverseLetter("ultr53o?n"))