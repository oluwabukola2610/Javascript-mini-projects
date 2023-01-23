'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add('hidden');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScoree = 0;
let activePlayer = 0;
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScoree = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
//roll rhe dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    //   if dice is not equal one the curennt player continue
    if (dice !== 1) {
      currentScoree += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScoree;

      //   else chnage the player if dice is 1
    } else {
      //switch player
      switchPlayer();
    }
  }
});

// if player hold buttonm add the score to acctive playerscorr
btnHold.addEventListener('click', function () {
  if (playing) {
    // add score to total
    scores[activePlayer] += currentScoree;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        diceImg.classList.add('hidden');

    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){
    window.location.reload()
})
