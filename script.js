// Variables for human choice
let rockChoice = document.querySelector(".rock");
let paperChoice = document.querySelector(".paper");
let scissorsChoice = document.querySelector(".scissors");
let choiceContainer = document.querySelector("#choiceContainer")


//variables for keeping score
let roundElement = document.querySelector(".round")
let outcomeElement = document.querySelector(".outcome")
let playerScoreElement = document.querySelector(".playerScore")
let computerScoreElement = document.querySelector(".computerScore")


// variables that will keep track of score and round
let humanScore = 0;
let computerScore = 0;
let round = 0


// This function randomly generates 1 of 3 choices to play against
function getComputerChoice() {
    let getNumber = Math.floor(Math.random()* 3);
    if (getNumber === 1) {
        return "paper"
    } else if (getNumber === 2) {
        return "scissors"
    } else {
        return "rock"
    }
};


//function to play the round
function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        outcomeElement.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper" ) {
        outcomeElement.textContent = "Paper beats rock, you lose!";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        outcomeElement.textContent = "Rock beats scissors, you win!";
        humanScore++; 
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        outcomeElement.textContent = "Paper beats rock, you win!";
        humanScore++; 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        outcomeElement.textContent = "Scissors beat paper, you lose!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        outcomeElement.textContent = "Rock beats scissors, you lose!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        outcomeElement.textContent = "Scissors beats paper, you win!";
        humanScore++; 
    } else {
        outcomeElement.textContent = "tf just happened";
    };
    round++;
    roundElement.textContent = `Round number: ${round}`;
    playerScoreElement.textContent = `Your current score: ${humanScore}`;
    computerScoreElement.textContent = `Computer's current score: ${computerScore}`;
    if (humanScore === 5) {
        outcomeElement.textContent = "Game over, you win!";
        removeChildren();
    } else if (computerScore === 5) {
        outcomeElement.textContent = "Game over, you lose!";
        removeChildren();
    };
};

//self explanatory
function removeChildren() {
    choiceContainer.removeChild(rockChoice);
    choiceContainer.removeChild(paperChoice);
    choiceContainer.removeChild(scissorsChoice);
}



//Event listeners that accept player choice on click and play a round
rockChoice.addEventListener("click", () => {
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});


paperChoice.addEventListener("click", () => {
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);

});

scissorsChoice.addEventListener("click", () => {
    humanSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
})