const startButton = document.querySelector('#start-button');
const jumbotron = document.querySelector('#jumbotron')
const playerScissor = document.querySelector('#player-scissor');
const playerRock = document.querySelector('#player-rock');
const playerPaper = document.querySelector('#player-paper');

const choices = ['scissor', 'paper', 'rock'];

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

let jumboText = document.getElementsByClassName('jumbo-text');

function removeElementsByClassName(className){
    while(jumboText.length > 0){
        jumboText[0].parentNode.removeChild(jumboText[0]);
    }
}

function paperHandler(){
    playerChoice = 'paper';
    playRound(playerChoice);
    if (playerScore === 5 || computerScore == 5){
        endGame();
    }
}

function rockHandler(){
    playerChoice = 'rock';
    playRound(playerChoice);
    if (playerScore === 5 || computerScore == 5){
        endGame();
    }
}

function scissorHandler(){
    playerChoice = 'scissor';
    playRound(playerChoice);
    if (playerScore === 5 || computerScore == 5){
        endGame();
    }
}

function gameStart(){
    playerPaper.addEventListener('click', paperHandler, false);
    playerRock.addEventListener('click', rockHandler, false);
    playerScissor.addEventListener('click', scissorHandler, false);
}

function computerPlay(){
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerChoice){
    computerPlay();
    removeElementsByClassName('jumbo-text');
    const choiceText = document.createElement ('p');
    choiceText.classList.add('jumbo-text');
    choiceText.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    jumbotron.appendChild(choiceText);
    if (computerChoice === 'scissor' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'rock' || computerChoice === 'rock' && playerChoice === 'scissor'){
        ++computerScore;
        const computerWonText = document.createElement('p');
        computerWonText.classList.add('jumbo-text');
        computerWonText.textContent = `Computer won! Computer now has ${computerScore} points. You have ${playerScore} points.`;
        jumbotron.appendChild(computerWonText);
    } else if (playerChoice === 'scissor' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'scissor'){
        ++playerScore;
        const playerWonText = document.createElement('p');
        playerWonText.classList.add('jumbo-text');
        playerWonText.textContent = `You won! Computer now has ${computerScore} points. You have ${playerScore} points.`;
        jumbotron.appendChild(playerWonText);
    } else {
        const tieText = document.createElement('p');
        tieText.classList.add('jumbo-text');
        tieText.textContent = `It's a tie. Computer now has ${computerScore} points. You have ${playerScore} points.`;
        jumbotron.appendChild(tieText);
    }
}

function endGame(){
    removeElementsByClassName('jumbo-text');
    const gameOverText = document.createElement('p');
    gameOverText.classList.add('jumbo-text');
    if (playerScore > computerScore){
        gameOverText.textContent = `Game Over! YOU WON! Computer now has ${computerScore} points. You have ${playerScore} points.`;
        jumbotron.appendChild(gameOverText);
    } else {
        gameOverText.textContent = `Game Over! YOU LOST! Computer now has ${computerScore} points. You have ${playerScore} points.`;
        jumbotron.appendChild(gameOverText);
    }
    const restartText = document.createElement ('p');
    restartText.classList.add('jumbo-text');
    restartText.textContent = `Press Start if you want to play again.`;
    jumbotron.appendChild(restartText);
    
    playerPaper.removeEventListener('click', paperHandler, false);
    playerRock.removeEventListener('click', rockHandler, false);
    playerScissor.removeEventListener('click', scissorHandler, false);
}

startButton.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    removeElementsByClassName('jumbo-text');
    const startText = document.createElement ('p');
    startText.classList.add('jumbo-text');
    startText.textContent = `Select scissor, paper or rock in the left side menu.`;
    jumbotron.appendChild(startText);
    gameStart();
})
