// Quiz questions and answers
const quizData = [
  {
    question: "What is Alina's Maltese dog's name?",
    choices: ["Bella", "Lucy", "Luna"],
    answer: "Bella",
  },
  {
    question: "What is Alina's favorite sport?",
    choices: ["Tennis", "Soccer", "Basketball"],
    answer: "Tennis",
  },
  {
    question: "What is Alina's favorite color?",
    choices: ["Red", "Green", "Blue"],
    answer: "Burgundy",
  },
  {
    question: "What is Alina's favorite winter sport?",
    choices: ["Skiing", "Snowboarding", "Ice skating"],
    answer: "Snowboarding",
  },
  {
    question: "What is Alina's favorite water sport?",
    choices: ["Swimming", "Surfing", "Wakeboarding"],
    answer: "Wakeboarding",
  },
];

// Get DOM elements
const startBtn = document.getElementById("start-quiz");
const homeBtn = document.getElementById("home");
const quizBtn = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");

// Quiz state variables
let currentQuestion = 0;
let score = 0;

// Load home page and quiz page
function loadHome() {
  document.getElementById("welcome").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "none";
}

function loadQuiz() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  showQuestion();
}

// Display quiz questions and choices
function showQuestion() {
  const quizQuestion = quizData[currentQuestion];
  questionEl.innerText = quizQuestion.question;

  choicesEl.innerHTML = "";
  quizQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.classList.add("choice");
    button.addEventListener("click",
