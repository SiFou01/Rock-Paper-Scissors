let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

function getUserChoice(userChoice) {
    rockBtn.classList.remove("clicked");
    paperBtn.classList.remove("clicked");
    scissorsBtn.classList.remove("clicked");
    switch(userChoice) {
        case "rock" : 
        rockBtn.classList.add("clicked");
        break;
        case "paper" : 
        paperBtn.classList.add("clicked")
        break;
        case "scissors" : 
        scissorsBtn.classList.add("clicked")
    }
    return userChoice;
}


function getMachineChoice() {
    let machineChoice = Math.floor((Math.random() * 3) + 1);
    switch (machineChoice) {
        case 1:
            machineChoice = "rock";
            break;
        case 2:
            machineChoice = "paper";
            break;
        case 3:
            machineChoice = "scissors";
    }
    return machineChoice;
}

let machineScore = 0;
let userScore = 0;

function playGame(userChoice) {
   userChoice = getUserChoice(userChoice);
   machineChoice = getMachineChoice();
   if (userChoice === machineChoice) {
    console.log("draw");
   }
   else if (userChoice === "rock" && machineChoice === "scissors" 
        ||  userChoice === "paper" && machineChoice === "rock"
        ||  userChoice === "scissors" && machineChoice === "paper") {
    console.log("You win");
    userScore++;
   }
   else {
    console.log("you lose");
    machineScore++;
   }
}
