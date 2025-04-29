// Game variables
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM Elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const roundResultDisplay = document.getElementById('round-result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const finalResultDisplay = document.getElementById('final-result');
const resetButton = document.getElementById('reset-button');
const choiceButtons = document.querySelectorAll('.choices button');

// Get computer's random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Play a single round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    
    // Update choice displays
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    
    // Determine winner
    if (playerChoice === computerChoice) {
        roundResultDisplay.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        roundResultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
    
    // Check if game is over
    if (playerScore >= winningScore || computerScore >= winningScore) {
        endGame();
    }
}

// End the game and display final result
function endGame() {
    // Disable choice buttons
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Display final result
    if (playerScore > computerScore) {
        finalResultDisplay.textContent = `You win the game! Final score: You ${playerScore}, Computer ${computerScore}`;
    } else {
        finalResultDisplay.textContent = `Computer wins the game! Final score: Computer ${computerScore}, You ${playerScore}`;
    }
    
    // Show final result and reset button
    finalResultDisplay.classList.remove('hidden');
    resetButton.classList.remove('hidden');
}

// Reset the game
function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    
    // Reset displays
    playerChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    roundResultDisplay.textContent = 'Choose rock, paper, or scissors to start!';
    
    // Hide final result and reset button
    finalResultDisplay.classList.add('hidden');
    resetButton.classList.add('hidden');
    
    // Re-enable choice buttons
    choiceButtons.forEach(button => {
        button.disabled = false;
    });
}

// Event listeners for buttons
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
resetButton.addEventListener('click', resetGame);
