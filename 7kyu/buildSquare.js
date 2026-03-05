function generateShape(integer){
let row = '+'.repeat(integer)
return Array(integer).fill(row).join('\n');
}


function generateShape(integer){
    let shape = '';
for(let i = 0; i < integer; i++){
    shape += '+'.repeat(integer);
    if(i < integer -1) shape += '\n';
}
return shape;
}