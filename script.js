"use strict";

const weapons = Array.from(document.querySelectorAll(".game-imgs"));
const computerWeapons = document.querySelectorAll(".game-imgs-computer");
const playerScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const again = document.querySelector(".again");
const close = document.querySelector(".close-outline");
const fullScreen = document.querySelector(".full-screen");
const gameOver = document.querySelector(".game-over");
const background = document.querySelector(".background");
const scoreText = document.querySelector(".score-text");

let playerSelection;
let computerSelection;
let win;
let score = [0, 0];

const removeHidden = (i) => {
  document.querySelector(".over-text").textContent = `You ${i}!`;
  gameOver.classList.remove("hidden");
  background.classList.remove("hidden");
};

const matchWinner = () => {
  if (score[0] === 5) removeHidden("Won");
  else if (score[1] === 5) removeHidden("Lost");
};

const closeBtn = () => {
  fullScreen.classList.remove("hidden");
  gameOver.classList.add("hidden");
  background.classList.add("hidden");
};

const winner = function () {
  if (playerSelection === computerSelection) win = "draw";
  else if (playerSelection === 0 && computerSelection === 1) win = "computer";
  else if (playerSelection === 0 && computerSelection === 2) win = "player";
  else if (playerSelection === 1 && computerSelection === 0) win = "player";
  else if (playerSelection === 1 && computerSelection === 2) win = "computer";
  else if (playerSelection === 2 && computerSelection === 0) win = "computer";
  else if (playerSelection === 2 && computerSelection === 1) win = "player";
  if (win === "player") {
    score[0]++;
    scoreText.textContent = "You won!";
  } else if (win === "computer") {
    score[1]++;
    scoreText.textContent = "You lost!";
  } else if (win === "draw") {
    scoreText.textContent = "Tie";
  }
  playerScore.textContent = score[0];
  computerScore.textContent = score[1];
  computerWeapons[computerSelection].style.scale = "1.1";
  computerWeapons[computerSelection].style.borderBottom = "2px solid #f1f3f5";
  setTimeout(() => {
    computerWeapons[computerSelection].style.scale = "1";
    computerWeapons[computerSelection].style.borderBottom = "none";
  }, 300);
  matchWinner();
};

const removeBorderBugFix = () => {
  for (let i = 0; i < 3; i++) {
    computerWeapons[i].style.scale = "1";
    computerWeapons[i].style.borderBottom = "none";
  }
};

weapons.forEach((item) => {
  item.addEventListener("click", () => {
    playerSelection = weapons.indexOf(item);
    computerSelection = Math.floor(Math.random() * 3);
    removeBorderBugFix();
    winner();
  });
});

again.addEventListener("click", () => {
  score = [0, 0];
  playerScore.textContent = score[0];
  computerScore.textContent = score[1];
  gameOver.classList.add("hidden");
  background.classList.add("hidden");
  fullScreen.classList.add("hidden");
  scoreText.textContent = "";
});

close.addEventListener("click", closeBtn);
background.addEventListener("click", closeBtn);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBtn();
});

fullScreen.addEventListener("click", () => {
  gameOver.classList.remove("hidden");
  background.classList.remove("hidden");
  fullScreen.classList.add("hidden");
});
