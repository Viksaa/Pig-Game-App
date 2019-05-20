var scores, roundScore, activePlayer, gamePlaying, prevDiceRoll;

reset();

document.querySelector('#load').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result
        var diceDOM = document.getElementById("dice");
        var diceDOM2 = document.getElementById("dice2");
        diceDOM.style.display = 'inline';
        diceDOM.src = 'Images/dice-' + dice + '.png';
        diceDOM2.style.display = 'inline';
        diceDOM2.src = 'Images/dice-' + dice2 + '.png';
        
        // 3. Update the round if dice is != 1
        // if(dice === 1) {
        //     changePlayer();
        // } else if(dice === 6 && prevDiceRoll === 6) {
        //     scores[activePlayer] = 0;
        //     document.getElementById("score-" + activePlayer).textContent = '0';
        //     changePlayer();
        // } else {
        //     roundScore += dice + dice2;
        //     document.getElementById("curr-" + activePlayer).textContent = roundScore;
        // }
        // prevDiceRoll = dice;

        if(dice !== 1 && dice2 !== 1) {
            roundScore += dice + dice2;
            document.getElementById("curr-" + activePlayer).textContent = roundScore;
        } else {
            changePlayer();
        }

    }

});

document.getElementById("hold").addEventListener('click', function() {
    if(gamePlaying) {
        // Add Current score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        var winningScore = document.getElementById("winningScore").value;
        winningScore ? winningScore = winningScore : winningScore = 100;

        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.getElementById("play" + activePlayer).textContent = "WINNER !";
            document.getElementById("dice").style.display = "none";
            document.getElementById("dice2").style.display = 'none';
            document.querySelector('.player-' + activePlayer).classList.add("winner");
            document.querySelector('.player-' + activePlayer).classList.remove("activePlayer");
            gamePlaying = false;
        } else // Change Player
            changePlayer();
    }

});

document.getElementById("newGame").addEventListener('click', reset);

function reset() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById("dice").style.display = 'none';
    document.getElementById("dice2").style.display = 'none';

    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("curr-0").textContent = '0';
    document.getElementById("curr-1").textContent = '0';
    document.getElementById("play0").textContent = "PLAYER 1";
    document.getElementById("play1").textContent = "PLAYER 2";
    document.querySelector('.player-0').classList.remove("winner");
    document.querySelector('.player-1').classList.remove("winner");
    document.querySelector('.player-0').classList.remove("activePlayer");
    document.querySelector('.player-1').classList.remove("activePlayer");
    document.querySelector('.player-0').classList.add("activePlayer");

}

function changePlayer() {
    roundScore = 0;
    // document.querySelector('.player-' + activePlayer).classList.remove('activePlayer');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById("curr-0").textContent = '0';
    document.getElementById("curr-1").textContent = '0';

    document.querySelector('.player-0').classList.toggle('activePlayer');
    document.querySelector('.player-1').classList.toggle('activePlayer');

    document.getElementById("dice").style.display = "none";
    document.getElementById("dice2").style.display = 'none';
}