const playerScoreboard = document.querySelector("#player-points")
const computerScoreboard = document.querySelector("#computer-points")
const playerChoices = document.querySelectorAll("button");
const playerFeedback = document.querySelector(".feedback")
let playerPoints = 0;
let computerPoints = 0;

playerChoices.forEach((button) => {
  button.addEventListener('click', () => {
  let winner = playRound(getComputerChoice(), button.id)
  if (winner === 1){
    playerPoints++
    playerScoreboard.textContent = playerPoints
  }
  else if (winner === -1) {
    computerPoints++
    computerScoreboard.textContent = computerPoints
  };

  if (playerPoints === 5) {
    playerFeedback.textContent = "You Win the Game!";
    playerPoints = 0;
    computerPoints = 0;
  }
  else if (computerPoints === 5){
    playerFeedback.textContent = "The Computer beat You ☹️"
    playerPoints = 0;
    playerScoreboard.textContent = playerPoints
    computerPoints = 0;
    computerScoreboard.textContent = computerPoints
  }

  })
})


// Get the computer's choice
function getComputerChoice() {
  const computerValue = Math.floor(Math.random() * 3);

  if (computerValue === 0) {
    return "rock";
  } else if (computerValue === 1) {
    return "paper";
  } else if (computerValue === 2) {
    return "scissors";
  }
}

// Prompt for player choice
function getPlayerChoice() {
  let validChoice = false;

  while (validChoice === false) {
    let playerChoice = prompt("Select Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();

    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      validChoice = true;
      return playerChoice;
    } else {
      alert("Invalid selection. type Rock, Paper, or Scissors");
    }
  }
}

// Compare player choice and select winner

function playRound(computerChoice, playerChoice) {
  if (playerChoice === computerChoice) {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. It's a DRAW`;
    console.log("draw")
    return 0;

  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. You WIN!`;
    console.log("win")
    return 1;

  } else if (playerChoice === "rock" && computerChoice === "paper") {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. You LOSE`;
    console.log("lose")
    return -1;

  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. You LOSE`;
    (console.log("lose"))
    return -1;

  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. You WIN!`;
    console.log("win")
    return 1;

  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. You LOSE`;
    console.log("lose")
    return -1;

  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerFeedback.textContent = `You picked ${playerChoice} and computer picked ${computerChoice}. You WIN!`;
    console.log("win")
    return 1;
  }
}

// Old play game code
/* function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let roundCount = 0; roundCount < 5; roundCount++) {
    const roundWinner = playRound(getComputerChoice(),getPlayerChoice());
    if (roundWinner == 1) {
      playerScore += 1;
    } 
    else if (roundWinner == -1) {
      computerScore += 1;
    }
  }
  if (playerScore > computerScore) {
    alert(`You Win!
    Your Score: ${playerScore}
    Computer Score: ${computerScore}`);
  }
  else if (playerScore < computerScore) {
    alert(`You Lose!
    Your Score: ${playerScore}
    Computer Score: ${computerScore}`);
  }
  else {
    alert(`Draw!
    Your Score: ${playerScore}
    Computer Score: ${computerScore}`);
  }

} */

