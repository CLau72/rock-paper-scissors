const playerChoices = document.querySelectorAll("button");

playerChoices.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(getComputerChoice(), button.id);
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
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    DRAW`);
    return 0;

  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    WIN`);
    return 1;

  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    LOSE`);
    return -1;

  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    LOSE`);
    return -1;

  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    WIN`);
    return 1;

  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    LOSE`);
    return -1;

  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    WIN`);
    return 1;
  }
}

function playGame() {
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

}

