// Computer chooses rock, paper, or scissors
    // How does computer choose? Computer randomly chooses one of three
    // Assign rock, paper and scissors numeric value (0, 1, 2)
    // Generate random number between 0-3 and round down 
    // Convert to value to word
// Player chooses rock, paper or scissors
    // ask player to choose rock, paper or scissors 
// Winner decided
    // compare computer and player chooses



//let computerChoice = Math.floor(Math.random()*3);

let computerChoice = () => {
    return Math.floor(Math.random()*3);
}


//let playerChoice = Number(prompt("Choose Scissors (0), Paper (1) or Rock (2)"));

let playerChoice = () => {
    return Number(prompt("Choose Scissors (0), Paper (1) or Rock (2)"));
}


/* let gameMessage = 
    (playerChoice + 1) % 3 == computerChoice  ? "You Win!" : 
    (playerChoice + 1) % 3 < computerChoice ? "You Lose!" : 
    "Draw!"; */

let playRound = ([playerScore, computerScore]) => {
    let comp = computerChoice();
    let player = playerChoice();
    let gameMessage = ""

    if((player + 1) % 3 == comp ) {
        gameMessage += "You Win!";
        playerScore++;
    } else if ((player + 1) % 3 < comp) {
        gameMessage += "You Lose!";
        computerScore++;
    } else {
        gameMessage += "Draw!";
    }

    let computerMessage = "Computer chose: "
    computerMessage += 
        comp == 2 ? "Rock" :
        comp == 1 ? "Paper" :
        "Scissors";
    
    let playerMessage = "You chose: "
    playerMessage += 
        player == 2 ? "Rock" :
        player == 1 ? "Paper" :
        "Scissors";

    console.log(computerMessage+"\n"+playerMessage+"\n"+gameMessage);
    console.log(playerScore, computerScore);

    return [playerScore, computerScore]
}

let playGame = (rounds) => {
    let score = [0, 0];
    
    for(let i = 0; i < rounds; i++) {
        score = playRound(score);   
    }

    let gameScore =
    score[0] > score[1] ? `You Win the Game! You won ${score[0]} rounds` :
    score[0] < score[1] ? `You Lose the Game! You won ${score[0]} rounds` :
    "It's a draw!";

    console.log(gameScore);
}

playGame(5);