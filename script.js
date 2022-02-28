function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      k++;
      return "You win! Rock beats Scissors";
    } else {
      return "It's a tie! You both chose Rock";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      k++;
      return "You win! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You lose! Scissors beat Paper";
    } else {
      return "It's a tie! You both chose Paper";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      k++;
      return "You win! Scissors beat Paper";
    } else {
      return "It's a tie! You both chose scissors";
    }
  } else {
    return "Invalid choice!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("Enter your choice!");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
  if (k >= 3) {
    console.log("You are the winner!");
  } else {
    console.log("Computer is the winner!");
  }
}
let k = 0;
game();
