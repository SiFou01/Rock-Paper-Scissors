let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

let round = document.getElementById("round");

let roundNum = 0;
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
    roundNum++;
    round.textContent = `#Round : ${roundNum}`;
    return userChoice;
}

let machineRock = document.getElementById("machineRock");
let machinePaper = document.getElementById("machinePaper");
let machineScissors = document.getElementById("machineScissors");


function getMachineChoice() {
    machineRock.classList.remove("clicked");
    machinePaper.classList.remove("clicked");
    machineScissors.classList.remove("clicked");
    let machineChoice = Math.floor((Math.random() * 3) + 1);
    switch (machineChoice) {
        case 1:
            machineChoice = "rock";
            machineRock.classList.add("clicked");
            break;
        case 2:
            machineChoice = "paper";
            machinePaper.classList.add("clicked");
            break;
        case 3:
            machineChoice = "scissors";
            machineScissors.classList.add("clicked");
    }
    return machineChoice;
}

let machineScore = 0;
let userScore = 0;

let score1 = document.getElementById("userScore");
let score2 = document.getElementById("machineScore");


let result = document.getElementById("result");

function playGame(userChoice) {
   userChoice = getUserChoice(userChoice);
   machineChoice = getMachineChoice();
   if (userChoice === machineChoice) {
    result.textContent = "Draw";
    result.style.color = "blue";
   }
   else if (userChoice === "rock" && machineChoice === "scissors" 
        ||  userChoice === "paper" && machineChoice === "rock"
        ||  userChoice === "scissors" && machineChoice === "paper") {
    result.textContent = "You Won !!";
    result.style.color = "green";
    userScore++;
   }
   else {
    result.textContent = "You Lost !";
    result.style.color = "red";
    machineScore++;
   }
   score1.textContent = userScore;
   score2.textContent = machineScore;
}
