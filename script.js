// defines variables using query selectors
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var resultEl = document.getElementById("result");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var submitEl = document.getElementById("submitScore");
var scoreListEl = document.getElementById("scoreboard-list");
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");

//hides quiz and scoreboard until needed
document.getElementById("quiz").style.display="none";
document.getElementById("scoreboard").style.display="none";

//An array of 5 questions, the possible options, and correct answer
var questions = [
    {
        question: "1: The right answer is C",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAns: "C"
    },
    {
        question: "2: The right answer is A",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAns: "A"
    },
    {
        question: "3: The right answer is B",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAns: "B"
    },
    {
        question: "4: The right answer is D",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAns: "D"
    },
    {
        question: "5: The right answer is B",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correctAns: "B"
    },
    
]

//global varibales needed for timer, scorekeeping, and cycling through questions
var finalQ = questions.length
var currentQ= 0;
var secondsLeft = 30;
var timerInterval;
var score = 0;
var correct;
var players =[]

// pulls questions and corresponding options from array, one at a time
function cycleQuestions(){
    if (currentQ === finalQ){
        return showScoreBoard();
    } 
    var showCurrentQ = questions[currentQ];
    questionEl.innerHTML = "<p>" + showCurrentQ.question + "</p>";
    buttonA.innerHTML = showCurrentQ.choiceA;
    buttonB.innerHTML = showCurrentQ.choiceB;
    buttonC.innerHTML = showCurrentQ.choiceC;
    buttonD.innerHTML = showCurrentQ.choiceD;
};

// Shows hidden quiz, starts quiz and timer
function startQuiz(){
    document.getElementById("quiz").style.display="block";
    cycleQuestions();
    

    //Timer
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Seconds Left: " + secondsLeft;

        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          showScoreBoard();
        }
      }, 1000);
}

// Checks whether answer is correct and adjusts timer/score accordingly
function checkAnswer(answer){
    correct = questions[currentQ].correctAns;

    if (answer === correct && currentQ !== finalQ){
        score++;
        currentQ++;
        cycleQuestions();
    }else if (answer !== correct && currentQ !== finalQ){
        currentQ++;
        secondsLeft = secondsLeft - 5;
        cycleQuestions();
    }else{
        showScoreBoard();
    }
}



// Shows ScoreBoard Div after game is over
function showScoreBoard(){
    startEl.style.display= "none";
    quiz.style.display = "none";
    document.getElementById("scoreboard").style.display="block";
    clearInterval(timerInterval);
    initialsEl.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + questions.length + " correct!";

    renderScores();
}

// saves initials with score to local storage after game is over
function saveScoreRecord () {
    var saveRecord = {
        playerInitials: initialsEl.value,
        playerScore: score,
    };
    localStorage.setItem("saveRecord", JSON.stringify(saveRecord));
}

// lists all saved scores
function renderScores() {
    scoreListEl.innerHTML = "";

    for (var i = 0; i < players.length; i++) {
        var playerRecord = players[i];
    
        var li = document.createElement("li");
        li.textContent = playerRecord;
        // li.setAttribute("player-index", i);
    
        scoreListEl.appendChild(li);
      }

}

function init() {
    // Get stored todos from localStorage
    var storedScores = JSON.parse(localStorage.getItem("players"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
      players = storedScores;
    }
    renderScores();
}
    


startEl.addEventListener("click", startQuiz);
submitEl.addEventListener("click", function(event) {
    event.preventDefault
    saveScoreRecord();
    renderScores();
    document.getElementById("scoreboard-list").style.display="block";
    document.getElementById("initials").style.display="none";
    document.getElementById("submitScore").style.display="none";

});