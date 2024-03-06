function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    const move = Math.floor((Math.random() * moves.length));
    return moves[move]
}


function playRound(userselection){
    const computerSelection = getComputerChoice();
    console.log(computerSelection)

    if (userselection === computerSelection){
        return "It's a tie!"
    }else if (userselection === "rock" && computerSelection === "scissors"){
        return "You win!"
    }else if (userselection === "rock" && computerSelection === "paper"){
        return "Computer wins!"
    }else if (userselection === "paper" && computerSelection === "rock"){
        return "You win!"
    }else if (userselection === "paper" && computerSelection === "scissors"){
        return "Computer wins!"
    }else if (userselection === "scissors" && computerSelection === "paper"){
        return "You win!"
    }else if (userselection === "scissors" && computerSelection === "rock"){
        return "Computer wins!"
    }
}

let userWins = 0;
let computerWins = 0;
let tie = 0;

for (let i = 0; i < 5; i++) {
    const user = prompt("Rock, paper, scissors?");
    const result = playRound(user);
    
    if (result === "You win!") {
      userWins++;
    } else if (result === "Computer wins!") {
      computerWins++;
    } else {
        tie++;
    }
}

console.log(`User wins: ${userWins}, Computer wins: ${computerWins}, Ties: ${tie}`);
