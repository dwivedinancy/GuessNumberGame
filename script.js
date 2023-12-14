'use strict';

let secretNum = Math.floor(Math.random() * 100);
console.log("secretNum :" + secretNum);
let highscore = 0;
let defaultScore = 5;
document.getElementById("score").textContent = defaultScore;

function isGuessRight() {
    console.log("secretNum :" + secretNum);
    let guessInput = document.getElementById("guess");
    let gnum = guessInput.value;
    if (gnum == '') {
        document.getElementById("message").textContent = "No Number Selected !!";
        defaultScore--;
    } else if (gnum > secretNum) {
        if (defaultScore >= 1) {
            document.getElementById("message").textContent = "Your Guess is Too High.";
            defaultScore--;
        } else if (defaultScore == 0) {
            document.getElementById("message").textContent = "You Lost the Game.";
            document.querySelector('body').style.backgroundColor = 'red';
        }

    } else if (gnum < secretNum) {
        if (defaultScore >= 1) {
            document.getElementById("message").textContent = "Your Guess is Too Low.";
            defaultScore--;
        } else if (defaultScore == 0) {
            document.getElementById("message").textContent = "You Lost the Game.";
            document.querySelector('body').style.backgroundColor = 'red';
        }

    } else if (gnum == secretNum) {
        console.log("5  ");
        document.getElementById("message").textContent = "Hurray !! You Won.";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (defaultScore > highscore) {
            highscore = defaultScore;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    document.querySelector('.score').textContent = defaultScore;
};


function newGame() {
    secretNum = Math.floor(Math.random() * 100);
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.getElementById("message").textContent = "Start guessing...";
    defaultScore = 5;
    document.querySelector('.score').textContent = defaultScore;
    document.querySelector('.guess').value = '';
    document.getElementById("number").textContent = '?';
    console.log("secretNum NEW GAME::" + secretNum);
}