// Stores the sequence of colors the user clicks in the current level
var userClickedPattern = [];

// Stores the full game-generated sequence across levels
var gamePattern = [];

// All possible button colors used by the game
var buttonColours = ["red", "blue", "green", "yellow"];

// Tracks the current level number (starts at 0 before the first round)
var level = 0;

// Prevents multiple starts; true once the game has begun
var started = false;

// Listen for any key press to start the game
$(document).keydown(function () {
  // Only run once at the very beginning (or after a restart)
  if (!started) {
    // Update the title to show the current level
    $("#level-title").text("Level " + level);
    // Create the first step of the sequence and show it
    nextSequence();
    // Mark the game as started so further keypresses don’t re-trigger start
    started = true;
  }
});

// Listen for clicks on any color button
$(".btn").click(function () {
  // Read the id (color name) of the clicked button
  var userChosenColour = $(this).attr("id");
  // Add the chosen color to the user's input pattern
  userClickedPattern.push(userChosenColour);
  // Play the sound associated with the clicked color
  playSound(userChosenColour);
  // Briefly animate the pressed state for visual feedback
  animatePress(userChosenColour);
  // Check the most recent user input against the game pattern
  checkAnswer(userClickedPattern.length - 1);
});

// Advances the game by adding a new random color to the sequence
function nextSequence() {
  // Reset the user's input for the new level
  userClickedPattern = [];
  // Increase the level count
  level++;
  // Update the title to show the new level
  $("#level-title").text("Level " + level);
  // Generate a random number between 0 and 3 (inclusive)
  var randomNumber = Math.floor(Math.random() * 4);
  // Convert the random number into a color name
  var randomChosenColour = buttonColours[randomNumber];
  // Append that color to the game’s master sequence
  gamePattern.push(randomChosenColour);
  // Select the button with the matching id and flash it (visual cue)
  $("#" + randomChosenColour)
    // Fade in quickly
    .fadeIn(100)
    // Then fade out quickly
    .fadeOut(100)
    // And fade back in to complete the flash
    .fadeIn(100);
  // Play the sound for the newly shown color
  playSound(randomChosenColour);
}

// Gives a quick “pressed” animation on the specified color button
function animatePress(currentColour) {
  // Add the CSS class that styles the button as pressed
  $("#" + currentColour).addClass("pressed");
  // After a short delay, remove the pressed style
  setTimeout(function () {
    // Remove the pressed class to return to normal state
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Plays the audio file that corresponds to the provided name (color or "wrong")
function playSound(name) {
  // Create a new audio object pointing to the desired file
  var audio = new Audio("sounds/" + name + ".mp3");
  // Start playing the audio
  audio.play();
}

// Compares the user’s latest input with the game’s sequence
function checkAnswer(currentLevel) {
  // If the latest user click matches the game sequence at this index
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // And if the user has completed the whole current sequence
    if (userClickedPattern.length == gamePattern.length) {
      // Wait a moment and then generate the next sequence step
      setTimeout(function () {
        // Advance to the next level and show the next color
        nextSequence();
      }, 1000);
    }
  // Otherwise, the user clicked a wrong color
  } else {
    // Play the “wrong” sound to indicate a mistake
    playSound("wrong");
    // Add a quick red flash to the background for game-over feedback
    $("body").addClass("game-over");
    // Update the title to prompt the player to restart
    $("#level-title").text("Game Over, Press Any Key to Restart");
    // Remove the red flash after a brief delay
    setTimeout(function () {
      // Clear the game-over class from the body
      $("body").removeClass("game-over");
    }, 200);
    // Reset the game values so a new game can start on next key press
    startOver();
  }
}

// Resets the core game state back to the initial values
function startOver() {
  // Reset the level counter to 0
  level = 0;
  // Clear the stored game sequence
  gamePattern = [];
  // Allow the next key press to start a fresh game
  started = false;
}
