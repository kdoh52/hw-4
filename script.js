var start = document.getElementById("start");
var secLeft = document.getElementById("secLeft");
var introText = document.getElementById("intro");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var question5 = document.getElementById("q5");
var finish = document.getElementById("finish");


// INITIALIZE
var totalSeconds = 75;
var status = true;
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
finish.style.display = "none";

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
        alert("time's up!");
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



// PRESSING START
start.addEventListener("click", pressStart);
