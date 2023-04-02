// Questions array
const questions = [
  {
    question: "What is Alina's favorite color?",
    answers: {
      a: "Blue",
      b: "Red",
      c: "Green",
      d: "Yellow"
    },
    correctAnswer: "b"
  },
  {
    question: "What is Alina's favorite winter sport?",
    answers: {
      a: "Snowboarding",
      b: "Skiing",
      c: "Ice skating",
      d: "Hockey"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of Alina's dog?",
    answers: {
      a: "Max",
      b: "Buddy",
      c: "Charlie",
      d: "Rocky"
    },
    correctAnswer: "c"
  },
  {
    question: "What is Alina's favorite hobby?",
    answers: {
      a: "Playing tennis",
      b: "Reading books",
      c: "Watching movies",
      d: "Playing video games"
    },
    correctAnswer: "a"
  },
  {
    question: "What is Alina's age on her birthday?",
    answers: {
      a: "26",
      b: "27",
      c: "28",
      d: "29"
    },
    correctAnswer: "b"
  }
];

// Variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Display quiz
function buildQuiz() {
  const output = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join("")} </div>
       </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

// Show results
function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

// Variables for slide control
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show first slide
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === 0) {
    document.getElementById("previous").style.display = "none";
  } else {
    document.getElementById("previous").style.display = "inline-block";
  }

  if (currentSlide === slides.length - 1)
