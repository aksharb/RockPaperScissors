function computerPlay(choices) {
  return choices[Math.floor(Math.random() * 3)];
}

function match(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats rock";
    } else if (computerSelection === "scissors") {
      return "You win! Rock beats scissors";
    } else {
      return "It's a tie! You both chose Rock";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
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
      return "You win! Scissors beat Paper";
    } else {
      return "It's a tie! You both chose scissors";
    }
  } else {
    return "Invalid choice!";
  }
}

let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = "Rock";
let computerSelection = computerPlay(choices);
console.log(match(playerSelection, computerSelection));
// console.log(computerPlay(choices));
