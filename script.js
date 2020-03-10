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
ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);
resetGame.addEventListener("click", startGame);
a = "";
b = "";
c = "";
d = "";

//---TIMER AND SCORING---//
var timeLeft = 10;

//---GAME FUNCTIONS---//
function startGame() {
  welcomeScreen.classList.add("collapse");
  timeCount.classList.remove("collapse");
  gameOverScreen.classList.add("collapse");


  var timeInterval = setInterval(function() {
    timeCount.textContent = "Time: " + timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === -1) {
      timeCount.textContent = "";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
  chooseAnswer();
  question1();
}

function chooseAnswer() {
  questionBox.classList.remove("collapse");
  correctAnswer.classList.add("collapse");
  wrongAnswer.classList.add("collapse");

  // ans1
  // ans2
  // ans3
  // ans4
}

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
  questionContent.textContent =
    "Which of these is not a keyword in Javascript?";
  ans1.textContent = "var";
  ans2.textContent = "function";
  ans3.textContent = "for";
  ans4.textContent = "banana";

  if (event.ans4) {
    correctAnswer.classList.remove("collapse");
    chooseAnswer();
  } else {
    wrongAnswer.classList.remove("collapse");
    timeLeft - 10;
    chooseAnswer();
  }
}
