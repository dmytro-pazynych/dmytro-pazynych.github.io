// get the back button element
const backBtn = document.getElementById("back-btn");

// determine the current page based on the title element
const title = document.querySelector("title").textContent;
let currentPage;

switch (title) {
  case "Birthday Quiz for Alina - Question 1":
    currentPage = 1;
    break;
  case "Birthday Quiz for Alina - Question 2":
    currentPage = 2;
    break;
  case "Birthday Quiz for Alina - Final Page":
    currentPage = 3;
    break;
  default:
    currentPage = 0;
    break;
}

// set the URL for the previous page based on the current page
let prevPageUrl;
switch (currentPage) {
  case 1:
    prevPageUrl = "index.html";
    break;
  case 2:
    prevPageUrl = "question1.html";
    break;
  case 3:
    prevPageUrl = "question2.html";
    break;
  default:
    prevPageUrl = "index.html";
    break;
}

// add event listener to back button to redirect to previous page
backBtn.addEventListener("click", () => {
  window.location.href = prevPageUrl;
});

// get the submit button element
const submitBtn = document.getElementById("submit-btn");

if (submitBtn) {
  // add event listener to submit button
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // get the user's answer from the form
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();

    // set the URL for the next page based on the current page and user's answer
    let nextPageUrl;
    switch (currentPage) {
      case 1:
        if (userAnswer === "27") {
          nextPageUrl = "question2.html";
        } else {
          alert("Wrong answer! Please try again.");
        }
        break;
      case 2:
        if (userAnswer === "alina") {
          nextPageUrl = "final.html";
        } else {
          alert("Wrong answer! Please try again.");
        }
        break;
      default:
        nextPageUrl = "index.html";
        break;
    }

    // redirect to the next page if the user answered correctly
    if (nextPageUrl) {
      window.location.href = nextPageUrl;
    }
  });
}
