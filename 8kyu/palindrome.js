function isPalindrome(x) {
  // your code here
  let lower = x.toLowerCase();
  let palindrome = lower.split("").reverse().join(""); 
  return lower === palindrome;
}
console.log(isPalindrome("hello"));