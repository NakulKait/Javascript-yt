# Project Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-d8wfdp?file=index.html)

# Solution Code

```javascript
let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const loworhi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number');
  } else if (guess < 1) {
    alert('Please Enter A Valid Number');
  } else if (guess > 100) {
    alert('Please Enter A Valid Number');
  } else {
    prevGuess.push(guess);
    if (numguess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over , Random number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuesses(guess);
    }
  }
}
function checkGuesses(guess) {
  if (guess === randomnumber) {
    displayMessage(`You guessed it right`);
    endGame();
  }
  if (guess > randomnumber) {
    displayMessage(`Number is too high`);
  }
  if (guess < randomnumber) {
    displayMessage(`Number is too low`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML = `${prevGuess} ; `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start New Game <h2>';
  startOver.appendChild(p);
  playgame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame = true;
  });
}

```