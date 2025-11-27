function toWeirdCase(string){
    let result = string.split(' ');
    return result.map(a=>{
        return [...a].map((e,i)=>{
            if(i%2) return e.toLowerCase();
            return e.toUpperCase()
        }).join('')
    }).join(' ')

}