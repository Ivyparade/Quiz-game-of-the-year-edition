var quizEl = document.getElementById("quiz")
var quizCl = quizEl.children;
var questionEl = document.getElementById("questions");
var timer = document.getElementById("timer");
var link = document.getElementById("highscore-link")

var q = 0;
var timeleft = 30

var quiz = [
    {
        title: "What does JS stand for?",
        choices: ["JSON", "Jquery", "Javascript", "Java"],
        answer: "Javascript",
    },
    {
        title: "Commonly used data types DO NOT include",
        choices: ["Booleans", "Numbers", "Strings", "Alerts"],
        answer: "Alerts",
    },
    {
        title: "What is not a valid variable name in javascript?",
        choices: ["2arr", "meep-morp", "molasses", "_varcon"],
        answer: "2arr",
    },
    {
        title: "What is not a program commonly used in website development?",
        choices: ["HTML", "Python", "JS", "CSS"],
        answer: "Python",
    },
    {
        title: "what is 2 + \"2\" ?",
        choices: ["2", "4", "22", "null"],
        answer: "22",
    },
    {
        title: "What tag woud you use to write javascript into a HTML document?",
        choices: ["script", "javascript", "body", "head"],
        answer: "script",
    },
]


gameplay()
Update()

function gameplay() {
    var timerInterval = setInterval(function () {
        timeleft--;
        timer.textContent = "Time: " + timeleft;
        if (timeleft === 0) {
            endgame()
        }
    }, 1000);
};

function Update() {
    quizCl[0].textContent = quiz[q].title;
    for (var i = 0; i < quiz[q].choices.length; i++) {
        quizCl[i + 1].textContent = quiz[q].choices[i];
    };
};

function endgame() {
    localStorage.setItem("score", timeleft);
    localStorage.setItem("mode", "Highscore");
    window.location.replace("index.html");
}

link.onclick = function(event) {
    localStorage.setItem("mode", "Highscore");
    window.location.replace("index.html");
}

quizEl.onclick = function(event) {
    if (event.target.type !== "button") {

    } else {
        console.log(event.target.textContent)
        if (event.target.textContent === quiz[q].answer) {
            console.log("correct")
            q++
            if (q === quiz.length) {
                endgame()
            }
            Update()
        } else {
            console.log("wrong")
            timeleft--;
            timer.textContent = "Time: " + timeleft;
        }
    }
};

