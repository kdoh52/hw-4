var start = document.getElementById("start");
var secLeft = document.getElementById("secLeft");
var introText = document.getElementById("intro");
var showPoints = document.getElementById("userScore");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var question5 = document.getElementById("q5");
var finish = document.getElementById("finish");

var answer1_1 = document.querySelector("#a1-1");
var answer1_2 = document.querySelector("#a1-2");
var answer1_3 = document.querySelector("#a1-3");
var answer1_4 = document.querySelector("#a1-4");

var answer2_1 = document.querySelector("#a2-1");
var answer2_2 = document.querySelector("#a2-2");
var answer2_3 = document.querySelector("#a2-3");
var answer2_4 = document.querySelector("#a2-4");

var answer3_1 = document.querySelector("#a3-1");
var answer3_2 = document.querySelector("#a3-2");
var answer3_3 = document.querySelector("#a3-3");
var answer3_4 = document.querySelector("#a3-4");

var answer4_1 = document.querySelector("#a4-1");
var answer4_2 = document.querySelector("#a4-2");
var answer4_3 = document.querySelector("#a4-3");
var answer4_4 = document.querySelector("#a4-4");

var answer5_1 = document.querySelector("#a5-1");
var answer5_2 = document.querySelector("#a5-2");
var answer5_3 = document.querySelector("#a5-3");
var answer5_4 = document.querySelector("#a5-4");


// INITIALIZE
var totalSeconds = 75;
var status = true;
var points = 0;
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
finish.style.display = "none";
correct.style.display = "none";
wrong.style.display = "none";

// PRESS START
function pressStart() {
    introText.style.display = "none";
    start.style.display = "none";
    question1.style.display = "block";
    timeFunc();
}

// WORKING TIMER
function timeFunc() {
    if (totalSeconds > 0) {
        setTimeout(minusSec, 1000);
    }
    else {
        question1.style.display = "none";
        question2.style.display = "none";
        question3.style.display = "none";
        question4.style.display = "none";
        question5.style.display = "none";
        finish.style.display = "block";
        showPoints.textContent = points;
    }
}
function minusSec() {
    totalSeconds--;
    renderTime();
    timeFunc();
}
function renderTime() {
    secLeft.textContent = totalSeconds;
}

// ADD POINT + CORRECT!
function plusPoint () {
    points++;
    console.log(points);

    correct.style.display = "block";
    setTimeout(function(){
        correct.style.display = "none";
    }, 1000);
}

// SUBTRACT TIME + WRONG!
function noPoint () {
    totalSeconds -= 10;
    renderTime();

    wrong.style.display = "block";
    setTimeout(function() {
        wrong.style.display = "none";
    }, 1000);
}

// QUIZ FLOW
function toQ2 () {
    question1.style.display = "none";
    question2.style.display = "block";
}
function toQ3 () {
    question2.style.display = "none";
    question3.style.display = "block";
}
function toQ4 () {
    question3.style.display = "none";
    question4.style.display = "block";
}
function toQ5 () {
    question4.style.display = "none";
    question5.style.display = "block";
}
function toFin () {
    question5.style.display = "none";
    finish.style.display = "block";
    showPoints.textContent = points;
    totalSeconds = 1;
    secLeft.textContent = "0";
}

// PRESSING START
start.addEventListener("click", pressStart);

// ANSWERING Q1
answer1_1.addEventListener("click", noPoint);
answer1_2.addEventListener("click", noPoint);
answer1_3.addEventListener("click", plusPoint);
answer1_4.addEventListener("click", noPoint);

answer1_1.addEventListener("click", toQ2);
answer1_2.addEventListener("click", toQ2);
answer1_3.addEventListener("click", toQ2);
answer1_4.addEventListener("click", toQ2);

// ANSWERING Q2
answer2_1.addEventListener("click", noPoint);
answer2_2.addEventListener("click", noPoint);
answer2_3.addEventListener("click", plusPoint);
answer2_4.addEventListener("click", noPoint);

answer2_1.addEventListener("click", toQ3);
answer2_2.addEventListener("click", toQ3);
answer2_3.addEventListener("click", toQ3);
answer2_4.addEventListener("click", toQ3);

// ANSWERING Q3
answer3_1.addEventListener("click", noPoint);
answer3_2.addEventListener("click", noPoint);
answer3_3.addEventListener("click", noPoint);
answer3_4.addEventListener("click", plusPoint);

answer3_1.addEventListener("click", toQ4);
answer3_2.addEventListener("click", toQ4);
answer3_3.addEventListener("click", toQ4);
answer3_4.addEventListener("click", toQ4);

// ANSWERING Q4
answer4_1.addEventListener("click", noPoint);
answer4_2.addEventListener("click", noPoint);
answer4_3.addEventListener("click", plusPoint);
answer4_4.addEventListener("click", noPoint);

answer4_1.addEventListener("click", toQ5);
answer4_2.addEventListener("click", toQ5);
answer4_3.addEventListener("click", toQ5);
answer4_4.addEventListener("click", toQ5);

// ANSWERING Q5
answer5_1.addEventListener("click", noPoint);
answer5_2.addEventListener("click", noPoint);
answer5_3.addEventListener("click", noPoint);
answer5_4.addEventListener("click", plusPoint);

answer5_1.addEventListener("click", toFin);
answer5_2.addEventListener("click", toFin);
answer5_3.addEventListener("click", toFin);
answer5_4.addEventListener("click", toFin);
