function capitalizeOddVowels(str){
    let vowels = "aiueo";
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i]) && i  % 3 === 0){
            result += str[i].toUpperCase();
        }
        else{
             result += str[i];
        }
       
    }
    return result;
}
console.log(capitalizeOddVowels("javascript is an awesome language") );  // "jAvAsCrIpt Is An AwEsOmE lAnguAgE" 