function cubeOdd(arr) {
 if (!arr.every(x => typeof x === "number" )) {
    return undefined;
  }
let odd = arr.filter(x=> x % 2 !== 0).map(x => x ** 3).reduce((a,b)=>a+b,0);

return odd
}
console.log(cubeOdd([1, 2, 3, 4, 'z'])); // undefined
console.log(cubeOdd([1, 2, 3, 4]));      // 28