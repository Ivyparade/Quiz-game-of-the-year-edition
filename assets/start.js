var scoreDisplay = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var startEl = document.getElementById("Start");
var scoreEl = document.getElementById("highscoreEl");
var scoreLi = document.getElementById("highscoreLi");
var username = document.getElementById("username");
var mode = localStorage.getItem("mode");
var score = localStorage.getItem("score");

var topscores = [];

init()

function init() {
    if (mode === "Highscore") {
        startEl.setAttribute("style", "visibility: hidden;");
        scoreEl.setAttribute("style", "visibility: visible;");
        scoreDisplay.textContent = "Your score is: " + score;
        var scorearr = JSON.parse(localStorage.getItem("topscores"));
        if (scorearr !== null) {
            topscores = scorearr;
        }
        renderlist();
    } else {
        startEl.setAttribute("style", "visibility: visible;");
        scoreEl.setAttribute("style", "visibility: hidden;");
    }
}

function save() {
 console.log(topscores);
 localStorage.setItem("topscores", JSON.stringify(topscores));
 localStorage.setItem("score", score);
};

function renderlist() {
    scoreLi.innerHTML = "";
    for (var i = 0; i < topscores.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = topscores[i];
        scoreLi.append(newItem);
    }
};

startBtn.addEventListener("click", function() {
    window.location.replace("quiz.html");
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var listText = score + ": " + username.value.trim();
    topscores.push(listText);
    username.value = "";
    score = 0;
    save();
    init();
});



