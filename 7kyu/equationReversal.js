function solve(eq) {
  let tokens = [];
  let current = "";
  for (let i = 0; i < eq.length; i++) {
    let char = eq[i];
    if (['*', '+', '-', '/'].includes(char)) {
     
      if (current !== "") {
        tokens.push(current);
        current = "";
      }
      tokens.push(char);
    } else {
    
      current += char;
    }
  }
  if (current !== "") {
    tokens.push(current);
  }
  return tokens.reverse().join('');
}

console.log(solve("100*b/y")); // Output: "y/b*100"