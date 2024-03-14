const questions = [
    {
        question: "What are arrays enclosed in?",
        answers: [
            { text: "Square Brackets", correct: true },
            { text: "Curly Brackets", correct: false },
            { text: "Parentheses", correct: false },
            { text: "Single Quotes", correct: false },
        ]
    },
    {
        question: "Who originally wrote Javascript?",
        answers: [
            { text: "Jordan Walke", correct: false },
            { text: " Tim Berners-Lee", correct: false },
            { text: "Brendan Eich", correct: true },
            { text: "James Gosling", correct: false },
        ]
    }
];
// Questions not changing - s on const question
const quizDiv = document.getElementById("quiz");
const welcomeEl = document.getElementById("welcome-div");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


var timeEl = document.getElementById("time");
var secondsLeft = 30;

let currentQuestionIndex = 0;
let score = 0;


function showDiv(event) {
    event.preventDefault();
    quizDiv.style.display = "block";
};

startButton.addEventListener("click", showDiv);

function removeWelcome(event) {
    event.preventDefault();
    welcomeEl.style.display = "none";
}
// Woo Hoo! 
startButton.addEventListener("click", removeWelcome);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function setTime(_event) {
    const timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Time left to complete Quiz";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            nextButton.style.display = "none";
        }
    }, 1000)
}

startButton.addEventListener("click", setTime);

function deductTime() {
    secondsLeft -= 5;
}





function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
        deductTime();
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
// Reminder of these``
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.style.display = "none";
}
// missing s on questions caused next question interuption
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
        time.style.display = "none";
        submit.style.display = "block";
    }
}

nextButton.addEventListener("click", () => {
    // var score = document.querySelector("#score").value;
    // var initials = document.querySelector("#initials").value;
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        showScore();
    }

});

function submitScore() {
    var score = document.querySelector("#score").value;
    var initials = document.querySelector("#initials").value;
    var dataObject = {
        score: score,
        initials: initials,
    };

    console.log 
    localStorage.setItem("score", score);
    localStorage.setItem("initials", initials);
}

startQuiz();




//  localStorage.setItem("score", score);
//  localStorage.setItem("initials", initials);






