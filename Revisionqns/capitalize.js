function capitalizeOdd(str){
    result = "";
    for(let i = 0; i < str.length; i++){
        if(((i + 1) % 3 === 0)){
            result += str[i].toUpperCase();
        }
        else{
            result += str[i];
        }
        
    }
    return result;
}
console.log(capitalizeOdd("Javascript"));