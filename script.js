var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var resultEl = document.getElementById("result");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");

document.getElementById("quiz").style.display="none";
document.getElementById("scoreboard").style.display="none";


var questions = [
    {
        question: "1: The right answer is C",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "C"
    },
    {
        question: "2: The right answer is A",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "A"
    },
    {
        question: "3: The right answer is B",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "B"
    },
    {
        question: "4: The right answer is D",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "D"
    },
    {
        question: "5: The right answer is B",
        choiceA: "AnsA",
        choiceB: "AnsB",
        choiceC: "AnsC",
        choiceD: "AnsD",
        correct: "B"
    },
    
]

var finalQ = questions.length
var currentQ= 0;
var setTimer = 60;
var timerInterval;
var score = 0;
var correct;


function cycleQuestions(){
    if (currentQ === QuestionIndex){
        return showScore();
    } 
    var currentQ = questions[QuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQ.question + "</p>";
    buttonA.innerHTML = currentQ.A;
    buttonB.innerHTML = currentQ.B;
    buttonC.innerHTML = currentQ.C;
    buttonD.innerHTML = currentQ.D;
};

// Shows hidden quiz, starts timer
function startQuiz(){
    quiz.style.display = "block";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        setTimer--;
        timer.textContent = "Time left: " + setTimer;

        if(setTimer === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
}

// Checks whether answer is correct and adjusts timer/score accordingly
function checkAnswer(answer){
    correct = questions[QuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        QuestionIndex++;
        generateQuizQuestion();
    }else if (answer !== correct && QuestionIndex !== finalQuestionIndex){
        QuestionIndex++;
        secondsLeft = secondsLeft - 5;
        generateQuizQuestion();
    }else{
        showScore();
    }
}
startEl.addEventListener("click",start);
