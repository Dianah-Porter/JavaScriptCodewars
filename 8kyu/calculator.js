function calculator(a, b, sign) {
  // Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "unknown value";
  }

  // Perform the correct operation based on the sign
  if (sign === '+') {
    return a + b;
  } else if (sign === '-') {
    return a - b;
  } else if (sign === '*') {
    return a * b;
  } else if (sign === '/') {
    return b !== 0 ? a / b : "unknown value"; // optional: handle division by 0
  } else {
    return "unknown value"; // If the sign is not one of the valid operations
  }
}
console.log(calculator(2,3,"+"));