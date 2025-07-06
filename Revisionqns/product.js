function product(a, b){
    if(Array.isArray(a)){
        return a.map(x => x * 2);
    }
    else if(a && b){
        return a * b;
    }
    else if(a || b){
        return a * a;
    }
     
    
}
console.log(product(2));

