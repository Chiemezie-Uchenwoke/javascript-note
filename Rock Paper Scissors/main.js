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
});

paper.addEventListener("click", () => {
    playerChoice = "paper";
    playerIcon.setAttribute("src", "paper.jpg");
});

scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    playerIcon.setAttribute("src", "scissors.jpg");
});