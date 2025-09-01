// Get the length of drum buttons
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  // Add event Listener for each of the queryselectorall for .drum wtih a click
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // obtain the "button" from the object
    var buttonInnerHTML = this.innerHTML;
    // Animation
    buttonAnimation(buttonInnerHTML);

    // from the above button --> see which switch case = the button above when pressed
    switch (buttonInnerHTML) {
      case "w":
        // store audio into variable
        var tom1 = new Audio("sounds/tom-1.mp3");
        // play the audio
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
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}

//  Add event Listener for each of the queryselectorall for .drum wtih keydown
document.addEventListener("keydown", function (e) {
  // Animation
  buttonAnimation(e.key);
  // from the above button --> see which switch case = the button above when pressed
  switch (e.key) {
    case "w":
      // store audio into variable
      var tom1 = new Audio("sounds/tom-1.mp3");
      // play the audio
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
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(e.key);
  }
});

// Animation

// obtain current key
function buttonAnimation(currentKey) {
  // queryselector on current key and store on a variable
  var activeButton = document.querySelector("." + currentKey);

  // add "pressed" class
  activeButton.classList.add("pressed");

  // wait for 0.1 seconds, and then remove class "pressed"
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
