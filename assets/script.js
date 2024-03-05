const questions = [
    {
        question: "What are arrays enclosed in?",
        answers: ["Square Brackets", "Curly Brackets", "Parentheses", "Single Quotes"],
        correctAnswer: "Square Brackets"
    },
    {
        question: "Who originally wrote Javascript?",
        answers: ["Tim Berners-lee", "Seth Jackson", "Brendan Eich", "Jordan Walke"],
        correctAnswer: "Brendan Eich"
    },
    // Add more questions before submission
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;
 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion ();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();



