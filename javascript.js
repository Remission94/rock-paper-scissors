function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    let randomChoice = choices[randomIndex]
    return randomChoice
}

function getHumanChoice() {
    let inputChoice = prompt("Make your choice: rock, paper or scissors: ");
    let inputChoiceLower = inputChoice.toLowerCase();
    return inputChoiceLower
 
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "rock") {
        return `Draw. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }  else if (humanChoice === "rock" && computerChoice == "paper") {
        computerScore = ++computerScore
        return `Paper beats rock, you loose. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }  else if (humanChoice === "rock" && computerChoice == "scissors") {
        humanScore = ++humanScore
        return `Rock beats scissors, you win. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }  else if (humanChoice === "paper" && computerChoice == "rock") {
        humanScore = ++humanScore
        return `Paper beats rock, you win. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }  else if (humanChoice === "paper" && computerChoice == "paper") {
        return `Draw. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }   else if (humanChoice === "paper" && computerChoice == "scissors") {
        computerScore = ++computerScore
        return `Scissors beats paper, you loose. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }  else if (humanChoice === "scissors" && computerChoice == "rock") {
        computerScore = ++computerScore
        return `Rock beats scissors, you loose. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }  else if (humanChoice === "scissors" && computerChoice == "paper") {
        humanScore = ++humanScore
        return `Scissors beats paper, you win. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }   else if (humanChoice === "scissors" && computerChoice == "scissors") {
        return `Draw. Score -> Human: ${humanScore} vs Computer: ${computerScore}`
    }   else {
        return "Wrong input!"
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`${humanSelection}     ${computerSelection}`)


console.log(playRound(humanSelection, computerSelection))