const choiceToNumMap = {"rock": 0, "paper": 1, "scissors": 2};
const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

const play_buttons = document.querySelectorAll(".play-button");
const round_results = document.querySelector(".round-results");
const your_score = document.querySelector(".my-score");
const bot_score = document.querySelector(".bot-score");
const reset = document.querySelector('.reset');

console.log(play_buttons);

reset.addEventListener("click", (e) => {
    console.log(e.target);
    computerScore = 0;
    humanScore = 0;
    your_score.textContent = humanScore;
    bot_score.textContent = computerScore;
    round_results.textContent = "Round Results";

})

play_buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target);
        let choice = e.target.value;
        let comp_choice = getComputerChoice();
        let result = playRound(choice, comp_choice);
        if (result == 1) {
            round_results.textContent = "Round Won";
        } else if (result == -1) {
            round_results.textContent = "Round Lost";
        } else {
            round_results.textContent = 'Round Draw';
        };
        your_score.textContent = humanScore;
        bot_score.textContent = computerScore;
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    // console.log("Computer", choice);
    return choice
};

// function getPlayerChoice() {
//     let choice = prompt("Please enter rock, paper, or scissors: ");
//     choice = choice.toLowerCase();
//     console.log(choice);
//     while (!choices.includes(choice)) {
//         choice = prompt("Invalid input. Please enter rock, paper, or scissors: ");
//         choice = choice.toLowerCase();
//     }
//     return choice
// }

function playRound(playerChoice, computerChoiceNum) {
    // let playerChoice = getPlayerChoice();
    // let computerChoiceNum = getComputerChoice();
    // console.log("Computer 2", computerChoiceNum);
    let playerChoiceNum = choiceToNumMap[playerChoice];
    if 
    ((playerChoiceNum == 1 && computerChoiceNum == 0) || (playerChoiceNum == 2 && computerChoiceNum == 1) || (playerChoiceNum == 0 && computerChoiceNum == 2)) {
        humanScore += 1;
        console.log(`You win, ${choices[playerChoiceNum]} beats ${choices[computerChoiceNum]}!`);
        return 1;
    } else if 
    ((playerChoiceNum == 0 && computerChoiceNum == 1) || (playerChoiceNum == 1 && computerChoiceNum == 2) || (playerChoiceNum == 2 && computerChoiceNum == 0)) {
        computerScore += 1;
        console.log(`You lose, ${choices[computerChoiceNum]} beats ${choices[playerChoiceNum]}! Delete yourself.`);
        return -1;
    } else {
        console.log(`You both played ${choices[playerChoiceNum]}, it was a draw.`);
        return 0;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Current score (you - computer): ${humanScore} - ${computerScore}`);
    }
}

// playGame();