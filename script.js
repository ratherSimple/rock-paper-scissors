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

over = false;

function playRound(playerSelection, computerSelection) {
    if (over)
        return;
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
    // console.log(outcome);
    let res = document.querySelector("#result");
    res.innerHTML = outcome;
    updateGame(outcome);
    return outcome;
}

let userScore = 0
let computerScore = 0

function updateGame(msg) {
    let keyword = msg.split(" ")[1];
        if (keyword == "win!")
            userScore++;
        else if (keyword == "was")
            ;
        else
            computerScore++;

    let userDom = document.querySelector("#userScore");
    let compDom = document.querySelector("#compScore");

    userDom.innerHTML = `Your score: ${userScore}`;
    compDom.innerHTML = `Computer score: ${computerScore}`;
    
    if (userScore < 5 && computerScore < 5)
        return;
    
    let final;
    let res = document.querySelector("#result");

    if (userScore > computerScore) {
        final = "You have won the game!";
    } else if (userScore < computerScore) {
        final = "You have lost the game!";
    } else {
        final = "You tied!";
    }
    over = true;
    res.innerHTML = final;
}

buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", e => {playRound(button.id, computerPlay())}));

// function game() {
//     let userScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let userPlay = prompt("What move do you want to play this round?");
//         let outcome = playRound(userPlay, computerPlay());
//         console.log(outcome);
//         let keyword = outcome.split(" ")[1];
//         if (keyword == "win!")
//             userScore++;
//         else if (keyword == "was")
//             ;
//         else
//             computerScore++;
//     }
//     if (userScore > computerScore) {
//         console.log("You have won!");
//     } else if (userScore < computerScore) {
//         console.log("You have lost!");
//     } else {
//         console.log("You tied!");
//     }
// }