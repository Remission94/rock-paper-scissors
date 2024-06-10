function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    let randomChoice = choices[randomIndex]
    return randomChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice == "rock") {

    }  else if (humanChoice === "rock" && computerChoice == "paper") {
        computerScore = ++computerScore
    }  else if (humanChoice === "rock" && computerChoice == "scissors") {
        humanScore = ++humanScore

    }  else if (humanChoice === "paper" && computerChoice == "rock") {
        humanScore = ++humanScore

    }  else if (humanChoice === "paper" && computerChoice == "paper") {

    }   else if (humanChoice === "paper" && computerChoice == "scissors") {
        computerScore = ++computerScore

    }  else if (humanChoice === "scissors" && computerChoice == "rock") {
        computerScore = ++computerScore

    }  else if (humanChoice === "scissors" && computerChoice == "paper") {
        humanScore = ++humanScore

    }   else if (humanChoice === "scissors" && computerChoice == "scissors") {

    }   

    scoreComputer.textContent = computerScore
    scoreHuman.textContent = humanScore
}

let humanScore = 0;
let computerScore = 0;

scoreHuman = document.querySelector("#humanScore")
scoreComputer = document.querySelector("#computerScore")

const rockButton = document.querySelector("#rock")
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))

const paperButton = document.querySelector("#paper")
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()))

const scissorsButton = document.querySelector("#scissors")
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()))