// BUTTON SECTION----
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btn = this.innerHTML;
    makeSound(btn);
    buttonAnimation(btn);
// KEYBOARD SECTION---
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key)

});


    function makeSound(btn) {
      switch (btn) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "l":
          var tom1 = new Audio("sounds/kick-bass.mp3");
          tom1.play();
          break;

        default:

          break;
      }

    }

  });
}

function buttonAnimation(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
  },100);


}








// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();









// document.querySelector(".w").addEventListener("click",w);
// document.querySelector(".a").addEventListener("click",a);
// document.querySelector(".s").addEventListener("click",s);
// document.querySelector(".d").addEventListener("click",d);
// document.querySelector(".j").addEventListener("click",j);
// document.querySelector(".k").addEventListener("click",k);
// document.querySelector(".l").addEventListener("click",l);
//
// function w(){
//   alert("W  got clicked");
// }
// function a(){
//   alert("A got clicked");
// }
// function s(){
//   alert("S got clicked");
// }
// function d(){
//   alert("D got clicked");
// }
// function j(){
//   alert("J got clicked");
// }
// function k(){
//   alert("k got clicked");
// }
// function l(){
//   alert("l got clicked");
// }
