let checker = function name(age) {
    if(age > 18) {
        console.log("You're allowed to vote!");
    } 
    else{
        console.log("You're not allowed to vote!");
    }
}
function vote(ag, chk) {
    chk(ag);  
}
vote(21, checker);

//callback function 

function greet(name, callback) {
  callback(name);
}
greet("Diana", (name) => console.log("Hello, " + name));