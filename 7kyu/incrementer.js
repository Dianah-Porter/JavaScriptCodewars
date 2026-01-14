function incrementer(nums) { 
  // code goes here
  let arr = [];
  for(let num = 0; num < nums.length; num++){
      let added = nums[num] + num + 1
      arr.push(added % 10)
  }
  return arr;
}
console.log(incrementer([1, 2, 3]));       // [2, 4, 6]
console.log(incrementer([3, 6, 9, 8, 9])); // [4, 8, 2, 2, 4]