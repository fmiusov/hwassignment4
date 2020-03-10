//Make highscore = time left
//Questions stored in object, buttons in an array
//Array of question objects
//Run a formatter to make sure html is valid
//Make sure README contains link to deployed application

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
var welcomeScreen = document.getElementById("welcome");
var totalScore = document.getElementById("total-score");

//---BUTTON FUNCTIONALITY---//
startBtn.addEventListener("click", startGame);
ans1.addEventListener("click", chose1());
ans2.addEventListener("click", chose2());
ans3.addEventListener("click", chose3());
ans4.addEventListener("click", chose4());
resetGame.addEventListener("click", startGame);
a = "";
b = "";
c = "";
d = "";

//---TIMER AND SCORING---//

//---GAME FUNCTIONS---//
function startGame() {
  welcomeScreen.classList.add("collapse");
  timeCount.classList.remove("collapse");
  gameOverScreen.classList.add("collapse");

  window.timeLeft = 180;
  var timeInterval = setInterval(function() {
    timeCount.textContent = "Time: " + timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === -1) {
      timeCount.textContent = "";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
  question1();
}

// function chooseAnswer() {
//   questionBox.classList.remove("collapse");
//   correctAnswer.classList.add("collapse");
//   wrongAnswer.classList.add("collapse");

//   // ans1
//   // ans2
//   // ans3
//   // ans4
// }

function checkAnswer() {
  if (true) {
    correctAnswer.classList.remove("collapse");
  } else {
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  }
}

function gameOver() {
  questionBox.classList.add("collapse");
  gameOverScreen.classList.remove("collapse");
  totalScore.textContent = timeLeft + 1;
}

//---QUESTIONS---//

function question1() {
  questionBox.classList.remove("collapse");
  questionContent.textContent =
    "Which of these is not a keyword in Javascript?";
  ans1.textContent = "var";
  ans2.textContent = "function";
  ans3.textContent = "for";
  ans4.textContent = "banana";

  ans4.onclick = function() {
    correctAnswer.classList.remove("collapse");
    wrongAnswer.classList.add("collapse")
  };
  ans1.onclick = function() {
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans2.onclick = function() {
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
  ans3.onclick = function() {
    wrongAnswer.classList.remove("collapse");
    timeLeft = timeLeft - 10;
  };
}

// if ( {
//   correctAnswer.classList.remove("collapse");
//   // chooseAnswer();
// } else if (chose1(true) || chose2(true) || chose3(true)) {
//   wrongAnswer.classList.remove("collapse");
//   var timeLeft = timeLeft - 10;
//   // chooseAnswer();
// }
