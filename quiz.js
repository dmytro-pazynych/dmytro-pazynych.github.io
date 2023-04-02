// array of quiz questions and answers
const quizData = [
  {
    question: "What is Alina's favorite winter activity?",
    answers: [
      "Skiing",
      "Snowboarding",
      "Ice skating",
      "Building snowmen"
    ],
    correctAnswer: 1
  },
  {
    question: "What is Alina's favorite color?",
    answers: [
      "Red",
      "Burgundy",
      "Gold",
      "Pink"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the name of Alina's dog?",
    answers: [
      "Buddy",
      "Rocky",
      "Charlie",
      "Max"
    ],
    correctAnswer: 2
  },
  {
    question: "What is Alina's favorite sport?",
    answers: [
      "Tennis",
      "Soccer",
      "Basketball",
      "Golf"
    ],
    correctAnswer: 0
  },
  {
    question: "What is Alina's favorite type of food?",
    answers: [
      "Italian",
      "Mexican",
      "Chinese",
      "American"
    ],
    correctAnswer: 0
  }
];

// get HTML elements
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

let currentQuestion = 0;
let score = 0;

// load first question
loadQuestion();

// event listeners
submitButton.addEventListener("click", nextQuestion);

// functions
function loadQuestion() {
  const question = quizData[currentQuestion].question;
  const answers = quizData[currentQuestion].answers;

  // set question text
  questionElement.innerText = question;

  // set answer text
  answerElements.forEach((answerElement, index) => {
    answerElement.innerText = answers[index];
  });
}

function nextQuestion() {
  // check if answer is correct
  if (getSelectedAnswer() === quizData[currentQuestion].correctAnswer) {
    score++;
  }

  // move to next question or show results
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
}

function getSelectedAnswer() {
  // loop through answer elements to find selected answer
  for (let i = 0; i < answerElements.length; i++) {
    if (answerElements[i].checked) {
      return i;
    }
  }
  return null; // no answer selected
}

function showResults() {
  // hide quiz and show results
  document.getElementById("quiz").style.display = "none";
  resultsContainer.style.display = "block";

  // set result text
  const resultText = `Congratulations, you scored ${score} out of ${quizData.length}!`;
  resultsContainer.innerText = resultText;
}
