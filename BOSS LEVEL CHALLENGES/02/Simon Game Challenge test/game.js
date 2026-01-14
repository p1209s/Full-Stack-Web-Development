var userClickedPattern = [];
var level = 0;

//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
var started = false;
// Add keypress event to start the game
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);

  level++;
  $("#level-title").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);

  // Check the answer after user clicks
  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // Check if the most recent user answer matches the game pattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    // Check if the user has finished their sequence
    if (currentLevel === gamePattern.length - 1) {
      // Wait 1000ms then start the next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);

      // Reset the userClickedPattern for the next level
      userClickedPattern = [];
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Call startOver to reset the game variables
    startOver();
  }
}

function startOver() {
  // Reset the game state
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
