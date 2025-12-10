function checkAnswer() {
    const correctAnswer = ("4");

    //Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;
    const feedback = document.getElementById("feedback");

    //compare value
    if (userAnswer === correctAnswer) {
        feedback.textContent = "correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
}