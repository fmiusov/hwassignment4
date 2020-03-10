//My javascript and html is loosely based on github user WebDevSimplified:
//https://github.com/WebDevSimplified/JavaScript-Quiz-App/blob/master/script.js
//My project differs in several ways from layout, timer, auto-next, etc. in
//accordance with our homework requirements and example.
//However, the order of variables and tags may be similar to the above referenced project.

//---GLOBAL VARIABLES---//
var startBtn = document.getElementById("startBtn");
var questionBox = document.getElementById("question-box");
var questionTitle = document.getElementById("questionTitle");
var questionContent = document.getElementById("questionContent");
var correctAnswer = document.getElementById("correctAns");
var wrongAnswer = document.getElementById("wrongAns");
var ans1 = document.getElementById("choice1");
var ans2 = document.getElementById("choice2");
var ans3 = document.getElementById("choice3");
var ans4 = document.getElementById("choice4");
var timeCount = document.getElementById("timer");
var gameOverScreen = document.getElementById("game-over");
var resetGame = document.getElementById("reset");

//---BUTTON FUNCTIONALITY---//
startBtn.addEventListener("click", startGame);
ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);
resetGame.addEventListener("click", startGame);


//---GAME FUNCTIONS---//
function startGame() {
  startBtn.classList.add("collapse");
  questionBox.classList.remove("collapse");
  timeCount.classList.remove("collapse");
  gameOverScreen.classList.add("collapse");
  var timeLeft = 10;

  var timeInterval = setInterval(function() {
    timeCount.textContent = "Time: " + timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === -1) {
      timeCount.textContent = "";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

function checkAnswer() {
  if (true) {
    correctAnswer.classList.remove("collapse");
  } else {
    wrongAnswer.classList.remove("collapse");
  }
}

function gameOver() {
    questionBox.classList.add("collapse");
    gameOverScreen.classList.remove("collapse");
}