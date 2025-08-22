function likeOrDislike(buttons) {
 if(buttons.length === 1 && buttons[0] === 'Like' || buttons[0] === 'Dislike' ){
   return buttons[0];
 }
 else if(buttons[0] === buttons[1]){
    return 'Nothing';
 }
  
}
console.log(likeOrDislike(["Dislike", "Dislike"]));