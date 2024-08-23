const choiceToNumMap = {"rock": 0, "paper": 1, "scissors": 2};
const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log("Computer", choice);
    return choice
};

function getPlayerChoice() {
    let choice = prompt("Please enter rock, paper, or scissors: ");
    choice = choice.toLowerCase();
    console.log(choice);
    while (!choices.includes(choice)) {
        choice = prompt("Invalid input. Please enter rock, paper, or scissors: ");
        choice = choice.toLowerCase();
    }
    return choice
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoiceNum = getComputerChoice();
    console.log("Computer 2", computerChoiceNum);
    let playerChoiceNum = choiceToNumMap[playerChoice];
    if 
    ((playerChoiceNum == 1 && computerChoiceNum == 0) || (playerChoiceNum == 2 && computerChoiceNum == 1) || (playerChoiceNum == 0 && computerChoiceNum == 2)) {
        humanScore += 1;
        console.log(`You win, ${choices[playerChoiceNum]} beats ${choices[computerChoiceNum]}!`);
    } else if 
    ((playerChoiceNum == 0 && computerChoiceNum == 1) || (playerChoiceNum == 1 && computerChoiceNum == 2) || (playerChoiceNum == 2 && computerChoiceNum == 0)) {
        computerScore += 1;
        console.log(`You lose, ${choices[computerChoiceNum]} beats ${choices[playerChoiceNum]}! Delete yourself.`);
    } else {
        console.log(`You both played ${choices[playerChoiceNum]}, it was a draw.`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Current score (you - computer): ${humanScore} - ${computerScore}`);
    }
}

playGame();