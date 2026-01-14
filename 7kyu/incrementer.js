function incrementer(nums) { 
  // code goes here
  let arr = [];
  for(let num = 0; num < nums.length; num++){
      let added = nums[num] + num + 1
      arr.push(added % 10)
  }
  return arr;
}