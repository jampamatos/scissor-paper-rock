// First, computer randomly chooses between scissor, paper or rock; stores in memory
// Then, input asks user to choose scissor paper or rock; stores in memory
// Computer checks and gives point to who won the round
// Repeat.

// computerPlay funtion will make computer choose scissor, paper or rock

const choices = ['scissor', 'paper', 'rock'];

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

computerPlay();
playerPlay();
playRound(computerChoice, playerChoice);


function computerPlay(){
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playerPlay(){
    let playerPrompt = prompt("Choose scissor, paper or rock to begin:");
    if (playerPrompt.toLowerCase() === 'scissor' || playerPrompt.toLowerCase() === 'paper' || playerPrompt.toLowerCase() === 'rock'){
        playerChoice = playerPrompt;
    } else {
        alert("Error! Please try again!");
        playerPlay();
    }
}

function playRound(computerChoice, playerChoice){
    if (computerChoice === 'scissor' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'rock' || computerChoice === 'rock' && playerChoice === 'scissor'){
        console.log("Computer won!");
        computerScore++;
    } else if (playerChoice === 'scissor' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'scissor'){
        console.log("Player won!");
        playerScore++;
    } else {
        console.log("It's a tie!");
    }
}