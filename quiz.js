function checkAnswer() {
    const correctAnswer = ("4");

    //Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = electionedOption ? selectedOption.value : null;
    const feedback = document.getElementById("feedback");

    //compare value and give feedbck
    if (userAnswer === correctAnswer) {
        feedback.textContent = "correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
}