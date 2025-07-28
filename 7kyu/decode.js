function decode(message){
let alpabets = "abcdefghijklmnopqrstuvwxyz";
let reversed = "zyxwvutsrqponmlkjihgfedcba";
for(let i = 0; i < message.length; i++){
    for(let j = 0; j < reversed.length; j++){
        message.replace(message[i], reversed[i])
    }
}
return alpabets.split('').reverse().join('');
}
console.log(decode());