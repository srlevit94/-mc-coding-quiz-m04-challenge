var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var timer = document.getElementById("timer");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var finalScore = document.getElementById("finalScore");

var questions = [
    {
        question: "Question #1",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
    {
        question: "Question #2",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
    {
        question: "Question #3",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
    {
        question: "Question #4",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
    {
        question: "Question #5",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
    {
        question: "Question #6",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
]



var timeEl = document.querySelector("timer");
var secondsLeft = 60;


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "seconds";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  
  timeEl.addEventListener('click', function (event)) {
      setTime()
  }