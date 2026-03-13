function remainder(n, m){
    let large = Math.max(n,m);
    let small = Math.min(n,m);
   return small !== 0 ? large % small: NaN; 
}