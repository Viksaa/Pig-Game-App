var globalScores = [0, 0];
var roundScore = 0;
var randNumb = Math.floor(Math.random() * 6) + 1;


function newGame() {
    globalScores = [0, 0];
    roundScores = 0;

    var element = document.getElementsByClassName("player-0")[0];
    element.classList.add("activePlayer");

    var del = document.getElementsByClassName("player-1")[0];
    del.classList.remove("activePlayer");

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    document.getElementById("curr-0").textContent = 0;
    document.getElementById("curr-1").textContent = 0;
}

function load() {
    console.log(randNumb);
    if(randNumb === 1) {
        // debugger;
        var activeLen = document.getElementsByClassName("activePlayer")[0].classList[0].length;
        var active = document.getElementsByClassName("activePlayer")[0].classList[0].charAt(activeLen - 1);
        var el = document.getElementsByClassName("player-" + active)[0].classList[1];
        var klasa = document.getElementsByClassName("player-" + active)[0].classList.remove(el);
        document.getElementById("curr-" + active).textContent = 0;
        if(active == 1)
            active = 0;
        else active = 1;
        document.getElementsByClassName("player-" + active)[0].classList.add("activePlayer");
        randNumb = Math.floor(Math.random() * 6) + 1;
        roundScore = 0;
        return;
    }

    var el = document.getElementById("dice").setAttribute("src", "Images/dice-" + randNumb + ".png");
    var activeLen = document.getElementsByClassName("activePlayer")[0].classList[0].length;
    var active = document.getElementsByClassName("activePlayer")[0].classList[0].charAt(activeLen - 1);
    
    roundScore += randNumb;

    document.getElementById("curr-" + active).textContent = roundScore;

    randNumb = Math.floor(Math.random() * 6) + 1;

}

function hold() {
    // debugger;
    roundScore = 0;
    var activeLen = document.getElementsByClassName("activePlayer")[0].classList[0].length;
    var active = document.getElementsByClassName("activePlayer")[0].classList[0].charAt(activeLen - 1);

    var broj = Number.parseInt(document.getElementById("curr-" + active).textContent);
    var num = Number.parseInt(document.getElementById("score-" + active).textContent);
    num += broj;

    document.getElementById("score-" + active).textContent = num;
    
    document.getElementById("curr-" + active).textContent = 0;

    var el = document.getElementsByClassName("player-" + active)[0].classList[1];
    var klasa = document.getElementsByClassName("player-" + active)[0].classList.remove(el);
    
    // if(Number.parseInt(document.getElementById("score-" + active)) >= 100) {
        var asd = document.getElementById("win" + active);
        asd.style.display = "inline";
        document.getElementById("play" + active).style.display = "none";
    // }

    if(active == 1)
        active = 0;
    else active = 1;
    document.getElementsByClassName("player-" + active)[0].classList.add("activePlayer");
}