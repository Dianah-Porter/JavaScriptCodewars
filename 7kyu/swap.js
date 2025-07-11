const swap = ary => {
  ary[0] = ary[0] + ary[1];
  ary[1] = ary[0] - ary[1];
  ary[0] = ary[0] - ary[1];
  return ary;
}

console.log(swap([1, 2])); 

