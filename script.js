// Computer makes a choice 
let computerChoice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1)
    switch (num) {
        case 1 : 
         computerChoice = "rock";
         break;
        case 2 :
         computerChoice = "paper";
         break;
        case 3 :
         computerChoice = "scissors"
    }
    return computerChoice;
}
// Play one round
function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        return "Draw";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"
             || playerChoice === "paper" && computerChoice === "rock"
             || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return `You win ${playerChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        return `You lose ${computerChoice} beats ${playerChoice}`;
    }
}

// Play Game 

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
let playerChoice = prompt(`Rock , Paper or Scissors`);
playerChoice = playerChoice.toLowerCase();
if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    alert(playRound(playerChoice) + `
    Score:
    You: ${playerScore}      Computer: ${computerScore}`);}
}