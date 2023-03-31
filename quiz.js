// Define the questions and their answers
const questions = [
  {
    question: "How old are you?",
    answers: [
      { text: "25", correct: false },
      { text: "26", correct: false },
      { text: "27", correct: true },
      { text: "28", correct: false }
    ]
  },
  {
    question: "What is your name?",
    answers: [
      { text: "Anna", correct: false },
      { text: "Maria", correct: false },
      { text: "Alina", correct: true },
      { text: "Olga", correct: false }
    ]
  }
];

// Get references to DOM elements
const containerEl = document.querySelector(".container");
const startButtonEl = document.querySelector("#start-btn");
const nextButtonEl = document.querySelector("#next-btn");
const questionEl = document.querySelector("#question");
const answerButtonsEl = document.querySelector("#answer-buttons");
const resultEl = document.querySelector("#result");

// Set up initial state
let currentQuestionIndex = 0;

// Add event listeners to buttons
startButtonEl.addEventListener("click", startQuiz);
nextButtonEl.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// Define the startQuiz function
function startQuiz() {
  // Hide the start button and show the first question
  startButtonEl.classList.add("hide");
  setNextQuestion();
}

// Define the setNextQuestion function
function setNextQuestion() {
  // Clear the previous question and answers
  resetState();
  // Show the next question and answers
  showQuestion(questions[currentQuestionIndex]);
}

// Define the showQuestion function
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer");
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

// Define the resetState function
function resetState() {
  nextButtonEl.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

// Define the selectAnswer function
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(selectedButton, correct);
  Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (currentQuestionIndex === questions.length - 1) {
    nextButtonEl.innerText = "Finish";
  }
  if (currentQuestionIndex < questions.length - 1) {
    nextButtonEl.classList.remove("hide");
  } else {
    startButtonEl.innerText = "Restart";
    startButtonEl.classList.remove("hide");
  }
}

// Define the setStatusClass function
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

// Define the clearStatusClass function
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

// Call the startQuiz function to start the quiz
startQuiz();
