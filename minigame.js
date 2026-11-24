
// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const resetButton = document.getElementById("resetButton");

// Check the user's guess
guessButton.addEventListener("click", function() {

    let userGuess = Number(guessInput.value);

    // Check empty input
    if (guessInput.value === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    // Check number range
    if (userGuess < 1 || userGuess > 10) {
        message.textContent = "Enter a number between 1 and 10!";
        return;
    }

    attempts++;

    attemptsText.textContent = attempts;

    // Compare the numbers
    if (userGuess === secretNumber) {

        message.textContent = "🎉 Correct! You win!";

        guessButton.disabled = true;
        guessInput.disabled = true;

    } else if (userGuess < secretNumber) {

        message.textContent = "❌ Too low! Try a bigger number.";

    } else {

        message.textContent = "❌ Too high! Try a smaller number.";

    }

    guessInput.value = "";

});

// Start a new game
resetButton.addEventListener("click", function() {

    secretNumber = Math.floor(Math.random() * 10) + 1;

    attempts = 0;

    attemptsText.textContent = 0;

    message.textContent = "Good luck! Start guessing.";

    guessInput.disabled = false;
    guessButton.disabled = false;

    guessInput.value = "";

});
