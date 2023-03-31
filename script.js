function checkAnswer() {
	var answer = document.querySelector('input[name="age"]:checked').value;
	if (answer === "27") {
		document.getElementById("result").innerHTML = "Correct!";
		window.location.href = "question2.html";
	} else {
		document.getElementById("result").innerHTML = "Incorrect. Try again.";
	}
}
