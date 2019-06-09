"use strict";
var paper = document.getElementById("box1");
var rock = document.getElementById("box2");
var scissors = document.getElementById("box3");
var output = document.getElementById("output");
var result = document.getElementById("result");
var newGame = document.getElementById("newGame");
var yourResult = 0; // Your result in score board
var compResult = 0; // Your rival's result in score board
var rounds = 0;
var gameOver = false;

newGame.addEventListener("click", function() {
  reset();
  rounds = window.prompt("How many rounds? ");
  document.getElementById("roundsNum").innerHTML =
    "<br> Number of rounds you need to win to become a Champ:  " +
    rounds +
    ". " +
    "<br> Good luck!";
  gameOver = false;
  yourResult = 0;
  compResult = 0;
  showPoints();
});

paper.addEventListener("click", function() {
  playerMove("paper");
});
rock.addEventListener("click", function() {
  playerMove("rock");
});
scissors.addEventListener("click", function() {
  playerMove("scissors");
});

function reset() {
  output.innerHTML = '';
}

function pick() {
  var options = ["paper", "rock", "scissors"];
  var index = Math.floor(Math.random() * 3);
  return options[index];
}

function roundResult(roundsNum, compMove, yourMove) {
  output.innerHTML =
    roundsNum +
    "<br>" +
    " Your choice : " +
    yourMove +
    "<br>" +
    " Rival's choice: " +
    compMove +
    "<br><br>";
  showPoints();
}

function showPoints() {
  result.innerHTML =
    "<br> Score board: <br> Your result: " +
    yourResult +
    "<br> Rival's result: " +
    compResult +
    "<br><br>";
}

function playerMove(yourMove) {
  if (gameOver) {
    roundsNum.innerHTML +=
      "<br><br> Don't forget to click grey button to start the game! ";
    return;
  }

  var compMove = pick();
  if (
    (yourMove == "paper" && compMove == "rock") ||
    (yourMove == "rock" && compMove == "scissors") ||
    (yourMove == "scissors" && compMove == "paper")
  ) {
    yourResult++;
    roundResult(" <br> Good move! Point for you! ", compMove, yourMove);
  } else if (
    (compMove == "paper" && yourMove == "rock") ||
    (compMove == "rock" && yourMove == "scissors") ||
    (compMove == "scissors" && yourMove == "paper")
  ) {
    compResult++;
    roundResult(" <br> Bad luck! Your rival won! ", compMove, yourMove);
  } else {
    roundResult(" <br> DRAW  ", compMove, yourMove);
  }
  checkIfFinish();
}

function checkIfFinish() {
  if (yourResult == rounds) {
    roundsNum.innerHTML = " <br> HURRAY! You won the game!";
    gameOver = true;
  } else if (compResult == rounds) {
    roundsNum.innerHTML =
      " <br> GAME OVER <br> Sorry! Your rival won! <br> Try again!";
    gameOver = true;
  }
}
showPoints();
