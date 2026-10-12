function maxSubarraySum(arr){
    let current_sum = 0;
    let max_sum = 0;

    if(arr.length === 0) return 0;
    
    for(let i=0; i < arr.length; i++){
        current_sum += arr[i];

