let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// This is a function to generate random number between 0 to 10. (10 exclusive)
const generateTarget = () => Math.floor(Math.random()*10);


//This function is to compare the guesses of human and computer with secret guess.
const compareGuesses = (userGuess, computerGuess, secretGuess) => {

    if ((userGuess < 0) || (userGuess > 9)) {
        alert('Guessed number is out range. please choose between 0 and 10.')
    };

    const userDifference = Math.abs(secretGuess - userGuess);
    const computerDifference = Math.abs(secretGuess - computerGuess);

    if (userDifference <= computerDifference) {
        return true
    } else {
        return false
    }
};


//This function is to update the score of the winner
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

//This function is to update the round number.
const advanceRound = () => currentRoundNumber++;