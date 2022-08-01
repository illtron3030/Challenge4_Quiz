var contentEl = document.getElementById('content');
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#timer');
var scoreEl = document.querySelector('#score');
var containerEl = document.querySelector('#container')
var timer = 100;
var currentQuestionIndex = 0;
var  timerInterval

var questions = [
    {
        question: "what color is your momma?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your dad?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your sister?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your brother?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your dog?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your cat?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
    {
        question: "what color is your fish?",
        options: ["black", "green","purple", "red"],
        answer: "black"
    },
];
function endgame(){
clearInterval(timerInterval)
containerEl.innerHTML = '';
var form = document.getElementById('form')
form.classList.remove('hidden')
}
var save = document.getElementById('save')
var initials = document.getElementById('initials')
var highScores = JSON.parse(localStorage.getItem('High Scores'))||[]
save.addEventListener('click', function(){
var data = {
    initials:initials,score:score
}
highScores.push(data)
localStorage.setItem('High Scores', JSON.stringify(highScores))
})
function renderCurrentQuestion(){
    if (currentQuestionIndex == questions.length){
        endgame()
        return
    }
    containerEl.innerHTML = '';
    var currentQuestion = questions [currentQuestionIndex];
    var header = document.createElement('h2'); //create element (only exist in js)
    console.log(header)
    header.textContent = currentQuestion.question;//set element text to the question
   containerEl.appendChild(header);//insert element back into action page
    
    var ulEl = document.createElement('ul');

    for (var i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = currentQuestion.options[i];
        ulEl.appendChild(liEl)
    }
    containerEl.appendChild(ulEl);

}

startBtn.addEventListener('click', function() {
    renderCurrentQuestion();
timerInterval = setInterval(function(){
    //element being used
    //a property of said element we are accessing
    //value passed to said property
    timerEl.textContent = timer;
    timer--;

if (timer <= 0) {
endgame()
}
}, 1000);
});
var score = 0
containerEl.addEventListener('click', function(event){
    if (event.target.matches('li')){
        var currentQuestion = questions[currentQuestionIndex];
        var userGuess = event.target.textContent;
    if (userGuess === questions[currentQuestionIndex].answer){
        alert('correct')  
        score+=5  
        scoreEl.textContent = score;
    }//TO DO: increase score
    //Extra credit play a sound
    //modify timer
    else {
        alert('incorrect')
        timer -=10
    }
    currentQuestionIndex++;
    renderCurrentQuestion();
    }})