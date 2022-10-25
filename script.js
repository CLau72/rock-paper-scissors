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

function selectWinner(computerChoice, playerChoice) {
  if (playerChoice === computerChoice) {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    DRAW`);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    WIN`);
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    LOSE`);
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    LOSE`);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    WIN`);
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    LOSE`);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert(`You selected: ${playerChoice}
    Computer selected: ${computerChoice}
    WIN`);
  }
}

function playRound() {
  selectWinner(getComputerChoice(), getPlayerChoice());
}

playRound();
