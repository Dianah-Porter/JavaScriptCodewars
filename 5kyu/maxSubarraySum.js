function maxSubarraySum(arr){
    let current_sum = 0;
    let max_sum = 0;

    if(arr.length === 0) return 0;
    
    for(let i=0; i < arr.length; i++){
        current_sum += arr[i];

        if(current_sum < 0){
            current_sum = 0;

        }else if(current_sum > max_sum){
            max_sum = current_sum;
        }
    }
    return max_sum;
}
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]))
//output: 6 sum of ([4,-1,2,1])
