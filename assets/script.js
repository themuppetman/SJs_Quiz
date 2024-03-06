const questions = [
    {
        question: "What are arrays enclosed in?",
        answers: [
            { text: "Square Brackets", correct: true},
            { text: "Curly Brackets", correct: false},
            { text: "Parentheses", correct: false},
            { text: "Single Quotes", correct: false},   
        ]
    },
    {
        question: "Who originally wrote Javascript?",
        answers: [
            { text: "Jordan Walke", correct: false},
            { text: " Tim Berners-Lee", correct: false},
            { text: "Brendan Eich", correct: true},
            { text: "James Gosling", correct: false},   
        ]
    }
];
    // Questions not changing - 
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
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
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
 
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) { 
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");    
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
// missing s on questions caused next question interuption
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

function saveScore () {
    var saveScore = localStorage.getItem("score");
    if (saveScore) {
        saveScore = JSON.parse(saveScore);
    }
    else {
        saveScore = []
    }
    saveScore.push({
        initials: "",
        score: score,
    })
    localStorage.setItem("score",JSON.stringify(saveScore));
}

startQuiz();



