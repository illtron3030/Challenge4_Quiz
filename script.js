var contentEl = document.getElementById('content');
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#timer');
var containerEl = document.querySelector('#container')

var timer = 5;
var currentQuestionIndex = 0;

var questions = [
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
];

function renderCurrentQuestion(){
    containerEl.innerHTML = '';
    var currentQuestion = questions [currentQuestionIndex];
    var header = document.createElement('h2');
    header.textContent = currentQuestion.question;
}

startBtn.addEventListener('click', function()) {
    renderCurrentQuestion();
var timerInterval = setInterval(function(){
    timerEl.textContent = timer;
    timer--;
}
}