const selectOption = [
    {
        question: "What are arrays enclosed in?",
        options: ["Square Brackets", "Curly Brackets", "Parentheses", "Single Quotes"],
        correctAnswer: "Square Brackets"
    },
    {
        question: "Who originally wrote Javascript?",
        options: ["Tim Berners-lee", "Seth Jackson", "Brendan Eich", "Jordan Walke"],
        correctAnswer: "Brendan Eich"
    },
    // Add more questions before submission
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-button');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;
 
function showQuestion() {
    const questionText = document.getElementById("question");
    questionText.textContent = questions[currentQuestion].question;

    const options = document.querySelectorAll(".options");
    options.forEach((options, index) => {
        choice.textContent = questions[currentQuestion].options[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}

const feedback = document.getElementById("feedback");
if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswer++;
} 
else {
  feedback.textContent = "Incorrect.";  
  
  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = '<p>You got ${correctAnswers} out of ${questions.length} questions.</p>';  
    }
  }, 2000);  
}


