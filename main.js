// Select all DOM elements we'll need and store their references into constants because their value won't change
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const moves = document.querySelectorAll(".move");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const userFeedback_p = document.getElementById("user-feedback");
const userInstructions_p = document.getElementById("user-instructions");

// Intitialize score variables and set them to 0 when game starts
let userScore = 0,
  computerScore = 0;

// Initialize array containing available moves for the computer
const computerAvailableMoves = ["paper", "rock", "scissors"];

// Loop through player available moves and listen for "click" event
moves.forEach(function(item) {
  item.addEventListener("click", function() {
    // For each "click" store user and computer choices in variables
    userChoice = this.dataset.name;
    computerChoice = chooseRandomAction(computerAvailableMoves);
    result = `${userChoice}/${computerChoice}`;
    // Given the result of the draw, call getWinner function to decide who wins
    if (getWinner(result) === "user") {
      // If user wins, call incrementScore and setMessage functions to increment score and display message accordingly
      incrementScore("user");
      setMessage("You win !");
    } else if (getWinner(result) === "computer") {
      // Same for computer
      incrementScore("computer");
      setMessage("You loose !");
    } else {
      // if equality just set message, score remains unchanged
      setMessage("That's a draw !");
    }
  });
});

// Function to select a random move for the computer
function chooseRandomAction(movesArray) {
  let computerChoice = movesArray[Math.floor(Math.random() * moves.length)];
  return computerChoice;
}

// Function to increment winner's score
function incrementScore(winner) {
  switch (winner) {
    case "user":
      userScore++;
      break;

    case "computer":
      computerScore++;
      break;

    default:
      break;
  }
  // Call setScore method to increment score
  setScore(winner);
}

// Function to determine who the winner is
function getWinner(result) {
  switch (result) {
    case "paper/rock":
    case "rock/scissors":
    case "scissors/paper":
      console.log("user wins");
      return "user";

    case "rock/paper":
    case "scissors/rock":
    case "paper/scissors":
      console.log("user looses");
      return "computer";

    default:
      console.log("that's a draw");
      return "draw";
  }
}

// Function to display a message to the user
function setMessage(message) {
  userFeedback_p.innerHTML = message;
}

// Function to display the winner's score
function setScore(winner) {
  if (winner === "user") {
    userScore_span.innerHTML = userScore;
  }
  if (winner === "computer") {
    computerScore_span.innerHTML = computerScore;
  }
}
