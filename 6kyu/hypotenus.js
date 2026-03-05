let calculateHypotenuse =(a, b) => {
  // TODO: complete calculateHypotenuse so that it returns the hypotenuse length
  // for a triangle with sides of length a, b, and c, where c is the hypotenuse.
  // The solution should verify that inputs are valid numbers (both above zero).
  let c;
  if(typeof a === 'number' && typeof b === 'number'){
    if(a > 0 && b > 0) c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  }
  else{
    console.log("Error!");
  }
  return Number(c.toFixed(3));
}