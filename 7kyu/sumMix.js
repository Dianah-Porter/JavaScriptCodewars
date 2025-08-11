function sumMix(x){
  return x.map(n => Number(n)).reduce((a,b)=>a + b, 0);
   }
   console.log(sumMix(['2',3,'4']));