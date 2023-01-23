'use strict';
const number = document.querySelector('.number');
let guessNum = Math.trunc(Math.random() * 20 + 1);
const scoreNum = document.querySelector('.score');
const playAgain = document.querySelector('.again');
let High = 0;
let score = 20;
// number.textContent = guessNum;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('input value!!');
    //check if won
  } else if (guess === guessNum) {
    document.querySelector('body').style.backgroundColor = 'green';
    number.textContent = guessNum;
    number.style.width = '30rem';
    displayMessage('Correct, You Won !!');
    if (score > High) {
      High = score;
      document.querySelector('.highscore').textContent = High;
    }
  }
  // check if loose
  else if (guess !== guessNum) {
    if (score > 1) {
      score--;
      scoreNum.textContent = score;
      displayMessage(guess > guessNum ? 'Oops Too High' : 'Oops Too Low');
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('You Loose!!');
      scoreNum.textContent = 0;
    }
  }
});

playAgain.addEventListener('click', function () {
  window.location.reload()
});
