var scoreList = document.getElementById("score-list");
var winner = document.getElementById("winner");
var winScore = document.getElementById("win-score");
var clearScores = document.getElementById("clear-scores");

var highScores = JSON.parse(localStorage.getItem("user"));

// console.log(highScores);
winner.textContent = highScores.name + " " + highScores.score;

clearScores.addEventListener("click", function() {
    winner.textContent = "";
});