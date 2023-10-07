// Computer makes a choice 
let computerChoice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1)
    switch (num) {
        case 1 : 
         computerChoice = "Rock";
         break;
        case 2 :
         computerChoice = "Paper";
         break;
        case 3 :
         computerChoice = "Scissors"
    }
}