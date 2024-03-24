const selectRock = document.querySelector("#rock")
const selectPaper = document.querySelector("#paper")
const selectScissors = document.querySelector("#scissors")
const result = document.querySelector("#result")
const cpuWins = document.querySelector("#computer-wins")
const userWins = document.querySelector("#user-wins")
const playButton = document.querySelector("#play-game")
const choiceZone = document.querySelector("#choice-zone")
const clearButton = document.querySelector("#clear-btn")
let userWinNumber = 0;
let computerWinNumber = 0;
let tie = 0;


function playGame(){
    const computerSelection = getComputerChoice();
    const userSelection = document.querySelector(".selected").textContent.toLowerCase()
    const roundResult = playRound(userSelection,computerSelection)
    updateResult(roundResult)
    result.textContent = `Player's Choice: ${userSelection} | Computer's Choice: ${computerSelection} => ${roundResult}`
}


function updateResult(roundResult){
    if (roundResult === "You win!") {
            userWinNumber++;
        } else if (roundResult === "Computer wins!") {
            computerWinNumber++;
        } else {
            tie++;
        }

    userWins.textContent =  userWinNumber + tie
    cpuWins.textContent =  computerWinNumber + tie   
    clearButton.classList.remove("hide")
    result.classList.remove("hide")
}


function clear(){
    userWinNumber = 0;
    computerWinNumber = 0;
    tie = 0;
    result.textContent = ""
    userWins.textContent = ""
    cpuWins.textContent = ""
    result.classList.add("hide")
    playButton.classList.toggle("hide")
    choiceZone.classList.toggle("hide")
    clearButton.classList.toggle("hide")
}

function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    const move = Math.floor((Math.random() * moves.length));
    return moves[move]
}


function playRound(userSelection, computerSelection){
    if (userSelection === computerSelection){
        return "It's a tie!"
    }else if (userSelection === "rock" && computerSelection === "scissors"){
        return "You win!"
    }else if (userSelection === "rock" && computerSelection === "paper"){
        return "Computer wins!"
    }else if (userSelection === "paper" && computerSelection === "rock"){
        return "You win!"
    }else if (userSelection === "paper" && computerSelection === "scissors"){
        return "Computer wins!"
    }else if (userSelection === "scissors" && computerSelection === "paper"){
        return "You win!"
    }else if (userSelection === "scissors" && computerSelection === "rock"){
        return "Computer wins!"
    }
}

selectPaper.addEventListener("click", () => {
    selectRock.classList.remove("selected")
    selectPaper.classList.add("selected")
    selectScissors.classList.remove("selected")
    playGame()
})
selectRock.addEventListener("click", () => {
    selectRock.classList.add("selected")
    selectPaper.classList.remove("selected")
    selectScissors.classList.remove("selected")
    playGame()
})
selectScissors.addEventListener("click", () => {
    selectRock.classList.remove("selected")
    selectPaper.classList.remove("selected")
    selectScissors.classList.add("selected")
    playGame()
})
playButton.addEventListener("click", ()=>{
    playButton.classList.toggle("hide")
    choiceZone.classList.toggle("hide")
})
clearButton.addEventListener("click", clear)
