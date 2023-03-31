// Get the button elements for each question page
const question1Btn = document.getElementById("question1-btn");
const question2Btn = document.getElementById("question2-btn");
const finalBtn = document.getElementById("final-btn");

// Add event listeners to the button elements
question1Btn.addEventListener("click", () => {
  location.href = "question1.html";
});

question2Btn.addEventListener("click", () => {
  location.href = "question2.html";
});

finalBtn.addEventListener("click", () => {
  location.href = "final.html";
});
