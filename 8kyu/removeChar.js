function removeChar(str){
if(str.length >=  2){
  let newstr = str.slice(1, -1);   //to remove the first and the last chatacter 
  return newstr
}
  else if(str.length === 2){
   return ''
  }
  
};