let randomNumber = Math.floor(Math.random() * 10) + 1;
let lives = 3;

function updateHearts() {
    const heartsElement = document.getElementById('hearts');
    heartsElement.innerHTML = '❤️'.repeat(lives);
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function makeGuess() {
    const guessInput = document.getElementById('guess');
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 10) {
        showMessage('Please enter a number between 1 and 10!');
        return;
    }

    if (guess === randomNumber) {
        showMessage('🎉 You guessed it! You win!');
        document.querySelector('.input-container').style.display = 'none';
        document.getElementById('restart').style.display = 'block';
    } else {
        lives--;
        if (lives > 0) {
            showMessage(`Wrong guess! Try again. Lives left: ${lives}`);
            updateHearts();
        } else {
            showMessage('😞 Game Over! You\'ve lost all your lives.');
            document.querySelector('.input-container').style.display = 'none';
            document.getElementById('restart').style.display = 'block';
            updateHearts();
        }
    }

    guessInput.value = '';
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 1000) + 1;
    lives = 3;
    updateHearts();
    showMessage('Guess a number between 1 and 10!');
    document.querySelector('.input-container').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
}

// Initialize hearts on page load
updateHearts();
