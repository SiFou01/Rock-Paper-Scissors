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
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return "Draw";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"
             || playerChoice === "paper" && computerChoice === "rock"
             || playerChoice === "scissors" && computerChoice === "paper") {
        return `You win ${playerChoice} beats ${computerChoice}`;
    }
    else {
        return `You lose ${computerChoice} beats ${playerChoice}`;
    }
}