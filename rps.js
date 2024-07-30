let userChoice = "";
let aiChoice = "";
let choices = ["rock", "paper", "scissors"];

let winCount = 0;
let loseCount = 0;

const rockbutton = document.getElementById("rockbutton");
rockbutton.addEventListener("click", function () {
  userChoice = "rock";
  aiChoice = choices[Math.floor(Math.random() * choices.length)];
  displayResult();
});

const scissorsbutton = document.getElementById("scissorsbutton");
scissorsbutton.addEventListener("click", function () {
  userChoice = "scissors";
  aiChoice = choices[Math.floor(Math.random() * choices.length)];
  displayResult();
});

const paperbutton = document.getElementById("paperbutton");
paperbutton.addEventListener("click", function () {
  userChoice = "paper";
  aiChoice = choices[Math.floor(Math.random() * choices.length)];
  displayResult();
});

function displayResult() {
  const text = document.getElementById("text");

  if (userChoice === "paper") {
    if (aiChoice === "scissors") {
      text.innerHTML = "AI chose scissors, you lost";
      loseCount++;
      document.getElementById("div42").innerText = loseCount;
    } else if (aiChoice === "rock") {
      text.innerHTML = "AI chose rock, you won";
      winCount++;
      document.getElementById("div41").innerText = winCount;
    } else {
      text.innerHTML = "AI chose paper, it's a draw";
    }
  } else if (userChoice === "scissors") {
    if (aiChoice === "paper") {
      text.innerHTML = "AI chose paper, you won";
      winCount++;
      document.getElementById("div41").innerText = winCount;
    } else if (aiChoice === "rock") {
      text.innerHTML = "AI chose rock, you lost";
      loseCount++;
      document.getElementById("div42").innerText = loseCount;
    } else {
      text.innerHTML = "AI chose scissors, it's a draw";
    }
  } else {
    if (aiChoice === "scissors") {
      text.innerHTML = "AI chose scissors, you won";
      winCount++;
      document.getElementById("div41").innerText = winCount;
    } else if (aiChoice === "paper") {
      text.innerHTML = "AI chose paper, you lost";
      loseCount++;
      document.getElementById("div42").innerText = loseCount;
    } else {
      text.innerHTML = "AI chose rock, it's a draw";
    }
  }
}
