const quizBox = document.getElementById('quiz-box');
const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const resultElement = document.getElementById('result');
const quizData = [
     {
        question: "Which keyword is used to declare a variable with block scope in JavaScript?",
        options: ["var", "let", "define", "constvar"],
        answer: "let"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        question: "What will typeof null return in JavaScript?",
        options: ["null", "object", "undefined", "string"],
        answer: "object"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which function is used to execute code after a delay?",
        options: ["setInterval()", "setDelay()", "setTimeout()", "delay()"],
        answer: "setTimeout()"
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "fixed"],
        answer: "const"
    },
    {
        question: "Which array method creates a new array with transformed elements?",
        options: ["filter()", "forEach()", "map()", "find()"],
        answer: "map()"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "/* */", "#", "//"],
        answer: "//"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "splice()"],
        answer: "pop()"
    }
];
let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(currentQuestion.options[index]);
    }
    );
}
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        resultElement.textContent = "Correct!";
    }
    else {
        resultElement.textContent = "Wrong! The correct answer is: " + currentQuestion.answer;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            loadQuestion();
        }, 2000);
    }
    else {
        setTimeout(() => {
            resultElement.textContent = "Quiz Completed!";
            quizBox.style.display = "none";
        }, 2000);
    }
}
loadQuestion();
