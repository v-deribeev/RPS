"use strict";
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const final = document.querySelector(".result");
const counterUserResultRef = document.querySelector(".counterUserResult");
const counterBotResultRef = document.querySelector(".counterBotResult");
const pChoiceRef = document.querySelector(".pChoice");
const bChoiceRef = document.querySelector(".bChoice");
const resetBtnRef = document.querySelector(".reset");

let counterUserResult = 0;
let counterBotResult = 0;

// test comment

btnRock.addEventListener("click", function () {
  round("rock");
});
btnPaper.addEventListener("click", function () {
  round("paper");
});
btnScissors.addEventListener("click", function () {
  round("scissors");
});
resetBtnRef.addEventListener("click", function () {
  counterUserResult = 0;
  counterBotResult = 0;
  counterUserResultRef.textContent = `Player: ${counterUserResult}`;
  counterBotResultRef.textContent = `Bot: ${counterBotResult}`;
  pChoiceRef.innerHTML = "";
  bChoiceRef.innerHTML = "";
  final.textContent = "";
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const round = function (pChoice) {
  pChoiceRef.innerHTML = "";
  bChoiceRef.innerHTML = "";
  let randomFactor = getRandomInt(1, 3);
  let botChoice;
  let result;
  switch (randomFactor) {
    case 1:
      botChoice = "rock";
      break;
    case 2:
      botChoice = "paper";
      break;
    case 3:
      botChoice = "scissors";
      break;
  }

  pChoice === botChoice
    ? (result = "Draw")
    : (pChoice === "rock" && botChoice !== "paper") ||
      (pChoice === "paper" && botChoice !== "scissors") ||
      (pChoice === "scissors" && botChoice !== "rock")
    ? ((result = "Player Wins !"), counterUserResult++)
    : ((result = "Bot Wins !"), counterBotResult++);

  final.textContent = result;
  counterUserResultRef.textContent = `Player: ${counterUserResult}`;
  counterBotResultRef.textContent = `Bot: ${counterBotResult}`;

  const botChoiceImage = generateImage(botChoice);
  const pChoiceImage = generateImage(pChoice);

  pChoiceRef.appendChild(pChoiceImage);
  bChoiceRef.appendChild(botChoiceImage);
};

function generateImage(choice) {
  var img = document.createElement("img");
  img.src = `/RPS/assets/${choice}.png`;
  return img;
}
