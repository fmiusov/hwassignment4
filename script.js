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
var correctAnswer = document.getElementById("correct");
var wrongAnswer = document.getElementById("wrong");

//---BUTTON FUNCTIONALITY---//
startBtn.addEventListener("click", startGame)


function startGame() {
    startBtn.classList.add("collapse")
    questionBox.classList.remove("collapse")
}
