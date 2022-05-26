var questionEl = document.getElementById("question");
var buttonStart = document.getElementById("buttonStart");
var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var commentEl = document.querySelector(".comment");
var countEl = document.querySelector(".count");
var timeEl = document.querySelector(".time");
var allDoneEl = document.getElementById("allDone");
var countHighEl = document.querySelector(".highcount");
button0.disabled = false;
button1.disabled = false;
button2.disabled = false;
button3.disabled = false;
var selection = "";
var startQuiz = true;
var qNumber = 0;
var currentCount = 0;
var storedScore = 0;
var highscore = 0;
var secondsLeft;
var timerInterval;

// MCQ array object
const MCQ = [{
    qNumber: 0,
    q: "JavaScript is the programming language of the _____.",
    a: [{
        text: "Desktop",
        isCorrect: false
      },
      {
        text: "Mobile",
        isCorrect: false
      },
      {
        text: "Web",
        isCorrect: true
      },
      {
        text: "Server",
        isCorrect: false
      }
    ]
  },
  {
    qNumber: 1,
    q: "What is the type of JavaScript language?",
    a: [{
        text: "Object-oriented",
        isCorrect: false,
      },
      {
        text: "Object-based",
        isCorrect: true
      },
      {
        text: "Functional programming",
        isCorrect: false
      },
      {
        text: "All of the above",
        isCorrect: false
      }
    ]
  },
  {
    qNumber: 2,
    q: "Which of the following statement(s) is true about the JavaScript?",
    a: [{
        text: "It is a scripting language used to make the website interactive",
        isCorrect: false
      },
      {
        text: "It is an advanced version of Java for Desktop and Mobile application development",
        isCorrect: false
      },
      {
        text: "It is a markup language of Java to develop the webpages",
        isCorrect: false
      },
      {
        text: "All of the above",
        isCorrect: false
      }
    ]
  },
  {
    qNumber: 3,
    q: "JavaScript code can be written in ____.",
    a: [{
        text: "JavaScript file (.js file)",
        isCorrect: false
      },
      {
        text: "HTML document directly",
        isCorrect: false
      },
      {
        text: "JavaScript file and in HTML document directly",
        isCorrect: true
      },
      {
        text: "In style sheets (.css file)",
        isCorrect: false
      }
    ]
  }
]

function init(qNumber) {
  questionEl.innerText = MCQ[qNumber].q;
  button0.innerText = MCQ[qNumber].a[0].text;
  button0.value = MCQ[qNumber].a[0].isCorrect;
  button1.innerText = MCQ[qNumber].a[1].text;
  button1.value = MCQ[qNumber].a[1].isCorrect;
  button2.innerText = MCQ[qNumber].a[2].text;
  button2.value = MCQ[qNumber].a[2].isCorrect;
  button3.innerText = MCQ[qNumber].a[3].text;
  button3.value = MCQ[qNumber].a[3].isCorrect;

  button0.addEventListener("click", () => {
    selection = button0.value;
    if (selection === "true") {
      commentEl.textContent = "Correct!"
      setCounter();
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    } else {
      commentEl.textContent = "Wrong!"
      secondsLeft = secondsLeft - 2;
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    }
  })

  button1.addEventListener("click", () => {
    selection = button1.value;
    if (selection === "true") {
      commentEl.textContent = "Correct!"
      setCounter();
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    } else {
      commentEl.textContent = "Wrong!"
      secondsLeft = secondsLeft - 2;
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    }
  })

  button2.addEventListener("click", () => {
    selection = button2.value;
    if (selection === "true") {
      commentEl.textContent = "Correct!"
      setCounter();
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    } else {
      commentEl.textContent = "Wrong!"
      secondsLeft = secondsLeft - 2;
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    }
  })

  button3.addEventListener("click", () => {
    selection = button3.value;
    if (selection === "true") {
      commentEl.textContent = "Correct!"
      setCounter();
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    } else {
      commentEl.textContent = "Wrong!"
      secondsLeft = secondsLeft - 2;
      if (qNumber < 3) {
        nextQuestion();
      } else {
        secondsLeft = 1;
        button0.disabled = true;
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
      }
    }
  })

  buttonStart.addEventListener("click", () => {
    secondsLeft = 15;
    startTimer();
  })
}

if (startQuiz = true) {
  init("0");
}


function nextQuestion() {
  startQuiz = false;
  if (qNumber < 3) {
    qNumber++;
    init(qNumber);
  }
}

// Updates count when answer is correct
function setCounter() {
  currentCount++;
  countEl.textContent = currentCount;
  getHighScore();
}

function startTimer() {
  // Sets interval in variable
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft + " seconds remaining";

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      allDoneEl.textContent = "Quiz Ended!"
      getHighScore();
      countHighEl.textContent = storedScore;
    }

  }, 1000);
}

function getHighScore() {
  storedScore = localStorage.getItem(highscore);
  if (storedScore < currentCount) {
    localStorage.setItem(highscore, currentCount);
  }
}

function myInitial(form) {
  var initial = form.inputbox.value;
  getHighScore();
  alert("High Score for " + initial + ":  " + storedScore);
}

var buttonClear = document.createElement("button");
buttonClear.innerHTML = "Clear Highscores";
var chs = document.querySelector(".clear");
chs.appendChild(buttonClear);

buttonClear.addEventListener("click", function() {
  storedScore = localStorage.getItem(highscore);
  localStorage.removeItem(highscore);
  alert("Highscores were cleared to 0");
});
