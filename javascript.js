function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    let randomChoice = choices[randomIndex]
    return randomChoice
}

function getHumanChoice() {
    let inputChoice = prompt("Make your choice: rock, paper or scissors: ");
    let inputChoiceLower = inputChoice.toLowerCase();
    if (inputChoiceLower === "rock" || inputChoiceLower === "paper" || inputChoiceLower === "scissors") {
        return inputChoiceLower
    } else {
        return "Wrong input!"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "rock") {
        return "Draw."
    }  else if (humanChoice === "rock" && computerChoice == "paper") {
        return "Paper beats rock, you loose."
    }  else if (humanChoice === "rock" && computerChoice == "scissors") {
        return "Rock beats scissors, you win."
    }  else if (humanChoice === "paper" && computerChoice == "rock") {
        return "Paper beats rock, you win."
    }  else if (humanChoice === "paper" && computerChoice == "paper") {
        return "Draw."
    }   else if (humanChoice === "paper" && computerChoice == "scissors") {
        return "Scissors beats paper, you loose."
    }  else if (humanChoice === "scissors" && computerChoice == "rock") {
        return "Rock beats scissors, you loose."
    }  else if (humanChoice === "scissors" && computerChoice == "paper") {
        return "Scissors beats paper, you win."
    }   else if (humanChoice === "scissors" && computerChoice == "scissors") {
        return "Draw."
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`${humanSelection}     ${computerSelection}`)


console.log(playRound(humanSelection, computerSelection))