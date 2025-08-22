function binaryToString(binary) {
    let bin = binary.split('0b')
    .filter(Boolean).map(b=>parseInt(b,2));
    return bin.map(num => String.fromCharCode(num)).join('');
   
}
console.log(binaryToString('0b10000110b11000010b1110100') )   //Cat
//Added .filter(Boolean) → removes empty strings from the array before converting.
//String.fromCharCode(num)) to convert to Charcode ASCII 

/* 
parseInt(string, radix)
parseInt converts a string into an integer number.
The second argument (radix) tells it what number system the string is written in.
10 = decimal
16 = hexadecimal
2 = binary */