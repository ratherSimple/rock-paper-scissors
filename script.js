function computerPlay() {
    let chance = Math.random() * 3;
    let play;
    switch (true) {
        case chance >= 2:
            play = "Rock";
            break;
        case chance >= 1:
            play = "Paper";
            break;
        case chance >= 0:
            play = "Scissors";
            break;
    }
    return play;
}

function playRound(playerSelection, computerSelection) {
    let outcome;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            outcome = "It was a tie!";
        } else if (computerSelection == "paper") {
            outcome = "You lose! Paper beats Rock";
        } else {
            outcome = "You win! Rock beats Scissors";
        }
    }  else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            outcome = "You win! Paper beats Rock";
        } else if (computerSelection == "paper") {
            outcome = "It was a tie!";
        } else {
            outcome = "You lose! Scissors beat Paper";
        }
    } else {
        if (computerSelection == "rock") {
            outcome = "You lose! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            outcome = "You win! Scissors beat Paper";
        } else {
            outcome = "It was a tie!";
        }
    }
    return outcome;
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userPlay = prompt("What move do you want to play this round?");
        let outcome = playRound(userPlay, computerPlay());
        console.log(outcome);
        let keyword = outcome.split(" ")[1];
        if (keyword == "win!")
            userScore++;
        else if (keyword == "was")
            ;
        else
            computerScore++;
    }
    if (userScore > computerScore) {
        console.log("You have won!");
    } else if (userScore < computerScore) {
        console.log("You have lost!");
    } else {
        console.log("You tied!");
    }
}