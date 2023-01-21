"use strict";

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = SecretNumber;

document.querySelector(".check").addEventListener("click", function () {
  let value = document.querySelector(".guess").value;
  value = Number(value);

  if (
    document.querySelector(".message").textContent != "😭 you loose" &&
    document.querySelector(".message").textContent != "🎉 correct Number"
  ) {
    if (!value) {
      document.querySelector(".message").textContent = "❌ No Number";
    } else if (value == SecretNumber) {
      document.querySelector(".message").textContent = "🎉 correct Number";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = SecretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (value > SecretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📈 too high";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "😭 you loose";
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".score").textContent = 0;
      }
    } else if (value < SecretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "📉 too low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "😭 you loose";
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".message").textContent = "Start Gueessing ....";
  document.querySelector(".score").textContent = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = undefined;
  document.querySelector(".number").textContent = "?";
});
