const playerNumber = document.getElementById("playernum");
const wrongAnswer = document.getElementById("wrongans");
const submitButton = document.getElementById("submit");
const chancesLeft = document.getElementById("chances");
const result = document.getElementById("result");
const min = document.getElementById("min");
const max = document.getElementById("max");

const minNumber = 1;
const maxNumber = 20;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
let numberOfChances = 5;

chancesLeft.innerText = numberOfChances;
min.innerText = minNumber;
max.innerText = maxNumber;

const chancesDecrement = () => {
    numberOfChances--;
    chancesLeft.innerText = numberOfChances;
}

// Game Over when number of chances = 0
const gameOver = () => {
    if (numberOfChances === 0){
        wrongAnswer.innerText = "Game Over";
        submitButton.disabled = true;
    }
}

const playGame = () => {
    const userValue = Number(playerNumber.value);

    if (isNaN(userValue)){
        wrongAnswer.innerText = "Please enter a valid number";
        chancesDecrement();
        gameOver();
        result.innerText = ""; 
    }
    else if (userValue < minNumber){
        wrongAnswer.innerText = "Number is less than range";
        chancesDecrement();
        gameOver();
        result.innerText = ""; 
    }
    else if (userValue > maxNumber){
        wrongAnswer.innerText = "Number is above range";
        chancesDecrement();
        gameOver();
        result.innerText = ""; 
    }
    else {
        if (userValue === randomNumber){
            result.innerText = `Congratulations, your guess is right. The answer is ${randomNumber}`;
            wrongAnswer.innerText = "";
            result.style.color = "green";
            gameOver();
        }
        else if (userValue > randomNumber){
            result.innerText = "Too high, try again";
            wrongAnswer.innerText = ""; 
            chancesDecrement();
            gameOver();
            result.style.color = "red";
        }
        else{
            result.innerText = "Too low, try again";
            wrongAnswer.innerText = "";
            chancesDecrement();
            gameOver();
            result.style.color = "red";
        }
    }
}

submitButton.addEventListener("click", playGame);


// Reset Game
const resetGame = () => {
    wrongAnswer.innerText = "";
    numberOfChances = 5;
    chancesLeft.innerText = numberOfChances;
    result.innerText = "";
    submitButton.disabled = false;
    playerNumber.value = "";
}