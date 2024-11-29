const results = document.getElementById("results");
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const playerIcon = document.getElementById("player_icon");
const compIcon = document.getElementById("comp_icon");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Displaying a players choice
let playerChoice;

rock.addEventListener("click", () => {
    playerChoice = "rock";
    playerIcon.setAttribute("src", "rock.jpg");
    playGame();
});

paper.addEventListener("click", () => {
    playerChoice = "paper";
    playerIcon.setAttribute("src", "paper.jpg");
    playGame();
});

scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    playerIcon.setAttribute("src", "scissors.jpg");
    playGame();
});

// Displaying the computers choice
let computerChoice;
const computerPlay = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    
    if (randomChoice === 0){
        computerChoice = "rock";
        compIcon.setAttribute("src", "rock.jpg");
    }
    else if (randomChoice === 1){
        computerChoice = "paper";
        compIcon.setAttribute("src", "paper.jpg");
    }
    else {
        computerChoice = "scissors";
        compIcon.setAttribute("src", "scissors.jpg");
    }
    return computerChoice;
}

// Game Logic
const playGame = () => {
    computerPlay();

    if (playerChoice === computerChoice){
        results.innerText = "We have a tie";
    }

    else if (playerChoice === "rock"){
        if (computerChoice === "paper"){
            results.innerText = "Computer Wins";
            computerWins();
        }
        else {
            results.innerText = "Player Wins";
            playerWins();
        }
    }

    else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            results.innerText = "Player Wins";
            playerWins();
        }
        else {
            results.innerText = "Computer Wins";
            computerWins();
        }
    }

    else {
        if (computerChoice === "paper"){
            results.innerText = "Player Wins";
            playerWins();
        }
        else {
            results.innerText = "Computer Wins";
            computerWins();
        }
    }
    gameOver();
}

// Function to increment the score of the wins of the computer and player
let countP = 0; //player score count
let countComp = 0; //Computer score count

const playerWins = () => {
    countP++;
    playerScore.innerText = countP;
}

const computerWins = () => {
    countComp++;
    compScore.innerText = countComp;
}

const gameOver = () => {
    if (countP === 10 && countP > countComp){
        results.innerText = "Game Over - Player Wins";
        disableButton();
    }
    else if (countComp === 10 && countComp > countP){
        results.innerText = "Game Over - Computer Wins";
        disableButton();
    }
}

// To disable the buttons 
const disableButton = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// Reset the game
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    results.innerText = "";
    countP = 0;
    countComp = 0;
    playerScore.innerText = 0;
    compScore.innerText = 0;

    // To enable the buttons
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    // console.log("working");
    // location.reload();
});