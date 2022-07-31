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
    var header = document.createElement('h2'); //create element (only exist in js)
    header.textContent = currentQuestions.question;//set element text to the question
    containerEl.appendChild(header);//insert element back into actual page
    
    var ulEl = document.createElement('ul');

    for (var i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        var liEl = document.createElement(li);
        liEl.textContent = currentQuestions.options[i];
        ulEl.appendChild(liEl)
    }
    containerEl.appendChild(ulEl);

}

startBtn.addEventListener('click', function()) {
    renderCurrentQuestion();
var timerInterval = setInterval(function(){
    timerEl.textContent = timer;
    timer--;

if (timer === 0) {
    clearInterval(timerInterval);
}
}, 1000);
};

containerEl.addEventListener('click, function(event)'{

    if (event.target.matches('li')){
        var currentQuestion = questions[currentQuestionIndex];
        var userGuess = event.target.textContent;
    if (userGuess === currentQuestionIndex.answer){}
    }
});