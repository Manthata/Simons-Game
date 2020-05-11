var buttonsColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
 var started = false;

// $(".btn").on("click", function(){
//   // var userChosenColor = event.keys;
//   console.log(this);
// })
$(document).keypress(function(){

  if(!started){
    $("h1").text("Level " + level);
    sequenceChanger();
    started = true;

  }
})



$(".btn").on("click", function() {
  var userChosenColor = $(this).attr("id");
  // var userPattern = buttonsColors.indexOf(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playsound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern);

  console.log(userClickedPattern);
})

function checkAnswer(currentLevel){
  var lastValueOfUser = currentLevel.length - 1;
    if (gamePattern[lastValueOfUser] === userClickedPattern[lastValueOfUser]){
      console.log("success");
      if(gamePattern.length === userClickedPattern.length){
        setTimeout(function () {
          sequenceChanger();
        }, 1000);
      }
    }
    else{
      var wrong = new Audio("sounds/wrong.mp3")
      wrong.play();
      var gameOver = $("body");
      gameOver.addClass("game-over").fadeIn(100).fadeOut(100).fadeIn(100);
      gameOver.removeClass("game-over");
      $("h1").text("Game over, Press Any Key to Restar");

    }
}
function sequenceChanger() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomChosenColor = Math.floor(Math.random() * buttonsColors.length)
  var randomColorName = buttonsColors[randomChosenColor];
  gamePattern.push(randomColorName);
  playsound(randomColorName);
  animatePress(randomColorName);
  console.log(gamePattern);
}

function startOver(){
  level, gamePattern, started = 0;
}

function playsound(name) {
  var sound = new Audio()
  switch (name) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    default:

  }
}
function animatePress(colorId){
  var activeButton = $("#" + colorId);
    activeButton.addClass("pressed").fadeIn(50).fadeOut(50).fadeIn(50);
    activeButton.removeClass("pressed");


}
