function capMe(names) {
    let array = []
    let cap;
    let rest;
  for(let name of names){
       cap = name.split('').shift().toUpperCase();
      rest = name.slice(1).toLowerCase();
      array.push(cap + rest);
  }
  return array;
}
console.log(capMe(["KARLY", "DANIEL", "KELSEY"] ))//[ 'Karly', 'Daniel', 'Kelsey' ]  capitalize the first letter 