"use strict";
//selecting element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = 1 - activePlayer;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling dice functionality

btnRoll.addEventListener("click", function () {
  //1. generating a random dice roll
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;

    //2. displying the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. checked for rolled 1
    if (dice != 1) {
      //add to the score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      swithPlayer();
    }
  }
  // document.querySelector("#current--0").textContent = currentScore;
});

btnHold.addEventListener("click", function () {
  //add current score to the active player
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      swithPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  location.reload();
});
