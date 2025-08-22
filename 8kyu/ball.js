var Ball = function(ballType){
    this.ballType = ballType || 'regular';
}
var ball1 = new Ball();
var ball2 = new Ball('super');
console.log(ball1);
console.log(ball2);