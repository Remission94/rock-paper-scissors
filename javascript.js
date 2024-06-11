function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    let randomChoice = choices[randomIndex]
    return randomChoice
}

function playRound(humanChoice, computerChoice) {
    let game = document.querySelector(".game")
    let computerDisplay = document.querySelector("#computerChoice")

    if (computerScore == 5 || humanScore == 5) {
        window.location.reload()
    } else {
    if (humanChoice === "rock" && computerChoice == "rock") {
        game.textContent = "Draw"
        game.style.color = "black"
        computerDisplay.textContent = "Rock"
    }  else if (humanChoice === "rock" && computerChoice == "paper") {
        computerScore = ++computerScore
        game.textContent = "You loose"
        game.style.color = "red"
        computerDisplay.textContent = "Paper"
    }  else if (humanChoice === "rock" && computerChoice == "scissors") {
        humanScore = ++humanScore
        game.textContent = "You win"
        game.style.color = "green"
        computerDisplay.textContent = "Scissors"
    }  else if (humanChoice === "paper" && computerChoice == "rock") {
        humanScore = ++humanScore
        game.textContent = "You win"
        game.style.color = "green"
        computerDisplay.textContent = "Rock"
    }  else if (humanChoice === "paper" && computerChoice == "paper") {
        game.textContent = "Draw"
        game.style.color = "black"
        computerDisplay.textContent = "Paper"
    }   else if (humanChoice === "paper" && computerChoice == "scissors") {
        computerScore = ++computerScore
        game.textContent = "You loose"
        game.style.color = "red"
        computerDisplay.textContent = "Scissors"
    }  else if (humanChoice === "scissors" && computerChoice == "rock") {
        computerScore = ++computerScore
        game.textContent = "You loose"
        game.style.color = "red"
        computerDisplay.textContent = "Rock"
    }  else if (humanChoice === "scissors" && computerChoice == "paper") {
        humanScore = ++humanScore
        computerDisplay.textContent = "Paper"
        game.textContent = "You win"
        game.style.color = "green"
    }   else if (humanChoice === "scissors" && computerChoice == "scissors") {
        game.textContent = "Draw"
        game.style.color = "black"
        computerDisplay.textContent = "Scissors"
    }   

    scoreComputer.textContent = computerScore
    scoreHuman.textContent = humanScore

    if (computerScore == 5) {
        game.textContent = "You lost the game, press any button to start again!"
        game.style.color = "red"
    } else if (humanScore == 5) {
        game.textContent = "You won the game, press any button to start again!"
        game.style.color = "green"
    }
}
}

let humanScore = 0;
let computerScore = 0;

scoreHuman = document.querySelector("#humanScore")
scoreComputer = document.querySelector("#computerScore")

const rockButton = document.querySelector("#rock")
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))
rockButton.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "yellow";
  }, false);
rockButton.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "aliceblue";
  }, false);

const paperButton = document.querySelector("#paper")
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()))
paperButton.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "yellow";
  }, false);
paperButton.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "aliceblue";
  }, false);

const scissorsButton = document.querySelector("#scissors")
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()))
scissorsButton.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "yellow";
  }, false);
scissorsButton.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "aliceblue";
  }, false);
