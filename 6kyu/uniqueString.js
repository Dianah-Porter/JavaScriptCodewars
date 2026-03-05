function findUniq(arr) {

  let normalize = arr.map(str => {
    let lower = str.toLowerCase();
    let noSpace = lower.replace(/\s/g, '');
    let uniqueSorted = [...new Set(noSpace)]
      .sort()
      .join('');
    return uniqueSorted;
  });

 
  let counts = {};

  for (let item of normalize) {
    counts[item] = (counts[item] || 0) + 1;
  }

  let uniqueKey;
  for (let key in counts) {
    if (counts[key] === 1) {
      uniqueKey = key;
    }
  }

 return arr[normalize.indexOf(uniqueKey)];
}