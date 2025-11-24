let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // validate if input number is within a range.
  if (isNaN(guess) || guess <= 0 || guess > 100) {
    alert("Please enter a valid number! number range : 1 - 100");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (numGuess > 10) {
      displayMessage(`Game Over. Random number was:${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check if input number is matching with random number, if yes, user wins.
  if (guess === randomNumber) {
    displayMessage("Congratulations!... You Win!!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low...");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high...");
  }
}

function displayGuess(guess) {
  // clean input field
  //update arrays
  //update guess remaining.
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = ` ${11 - numGuess}`;
}

function displayMessage(message) {
  //displays the remaining attempts for the guess.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    //reset the variables.
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = ` ${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  //to end the game.
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id=newGame> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
