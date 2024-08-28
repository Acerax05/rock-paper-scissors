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
}


// This function returns a human choice based off of the answer to the prompt
function getHumanChoice() {


    do {
        var choice = prompt("Rock, Paper, or Scissors?", "").toLowerCase()
    }
    while (choice != "rock" && choice != "paper" && choice != "scissors");

   
   return choice
}



function playGame() {


    // variables that will keep track of score
    let humanScore = 0;
    let computerScore = 0;

    let round = 0



    //function to play the round
    function playRound(humanChoice,computerChoice) {
        console.log(computerChoice, humanChoice)
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper" ) {
            console.log("Paper beats rock, you lose!");
            computerScore = computerScore + 1;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Rock beats scissors, you win!");
            humanScore = humanScore + 1; 
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Paper beats rock, you win!");
            humanScore = humanScore + 1; 
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Scissors beat paper, you lose!");
            computerScore = computerScore + 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Rock beats scissors, you lose!");
            computerScore = computerScore + 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Scissors beats paper, you win!");
            humanScore = humanScore + 1; 
        } else {
            console.log("tf just happened")
        };
        console.log(`Your current Score: ${humanScore}`)
        console.log(`Computer's current Score: ${computerScore}`)

    }

    do {
        humanSelection = getHumanChoice().toLowerCase();
        computerSelection = getComputerChoice();
        round = round + 1;
        console.log(`Round number: ${round}`);
        playRound(humanSelection,computerSelection);
    }
    while (round < 5)
}

playGame()