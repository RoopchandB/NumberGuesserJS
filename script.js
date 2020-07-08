let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
//To generate random target number
const generateTarget = () => {
  let randNumber = Math.floor(Math.random() * 10);
  return randNumber
}
//To check whether the user guessed a number between 0 to 9
const checkUserGuess = (humanGuess,computerGuess) => {
    if(humanGuess < 0 || humanGuess > 10 && computerGuess){ 
        window.alert("Please guess the number between 0 to 10.");
    }
};

//Calculate the difference between the target number and guessed number, To know who has guessed nearest to the target number 
const getAbsoluteDistance = (theGuess, theTarget) => 
  Math.abs(theTarget - theGuess);

//To compare the guessed numbers of human and computer with the target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const userGuessDifference = getAbsoluteDistance(humanGuess, targetGuess)
  const computerGuessDifference = getAbsoluteDistance(computerGuess, targetGuess)
  return userGuessDifference <= computerGuessDifference;
   
}
//Updating the score of the winner incrementing by 1
const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
}

//Once the round is completed ,for going into the next round incrementing the current round by 1
const advanceRound = () => {
    return currentRoundNumber++;
}