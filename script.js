function computerPlay(choices) {
  return choices[Math.floor(Math.random() * 3)];
}

let choices = ["Rock", "Paper", "Scissors"];
console.log(computerPlay(choices));
