//Rock Paper Scissors Game

//get number of rounds
let rounds = parseInt( prompt("How many rounds do you want to play?") , 10);

//Global variables
let WINS = 0;
let LOSSES = 0;
let TIES = 0;

//loop number of rounds to play game
for(i = 0; i < rounds; i++) {

    //Player choice
    let player = prompt("Pick rock, paper, or scissors (r, p, or c)");

    //make sure user puts in correct choice
    while (true) {
        if(player == 'r' || player == 'p' || player == 'c') {
            break;
        }
        player = prompt("INVALID CHOICE OF \'" + player + "\'\nPick rock, paper, or scissors (r, p, or c)");
    }

    //Computer choice
    let num = Math.floor(Math.random() * 2);
    let computer = 's';
    if (num == 0) {
        computer = 'r';
    } else if (num == 1) {
        computer = 'p';
    }

    //compare choices and output
    if (computer == player){
        TIES++;
        alert("It's a tie!");
    } else if (player == 'r' && computer == 's' || player == 's' && computer == 'p' || player == 'p' && computer == 'r') {
        WINS++;
        alert("You win :) You picked " + player + " which beats " + computer);
    } else {
        LOSSES++;
        alert("You lost :( The computer picked " + computer + " which beats " + player);
    }
}

//output total scores
alert("GAME OVER!\nWINS: " + WINS + "   TIES: " + TIES + "   LOSSES: " + LOSSES);