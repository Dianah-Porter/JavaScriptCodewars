function findOutlier(integers){
  //your code here
let even = [];
let odd = [];
for(let num of integers){
    if(num % 2 === 0){
        even.push(num);
    }
    else{
        odd.push(num)
    }
}
if(even.length > odd.length) return odd[0];
return even[0];
}



//Refactored
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}