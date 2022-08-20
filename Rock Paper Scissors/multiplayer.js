'use strict';

const singleBtn = document.querySelector('.single-btn');
const multiplayerBtn = document.querySelector('.multiplayer-btn');
const gameSection= document.querySelector('.game');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock2 = document.querySelector('.game-imgs-0');
const paper2 = document.querySelector('.game-imgs-1');
const scissors2 = document.querySelector('.game-imgs-2');
const allImgs = document.querySelectorAll('.game-imgs');
const playerScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');
const textScore = document.querySelector('.score-text');
const closeBtn = document.querySelector('.close-outline');
const background = document.querySelector('.background');
const gameOver = document.querySelector('.game-over');
const fullscreen = document.querySelector('.full-screen');
const againBtn = document.querySelector('.again');

let playerOneSelection;
let playerTwoSelection;
let win;
let score = [0, 0];

function winnerMultiplayer(){
    if(playerOneSelection === playerTwoSelection){
        win = 0;
        console.log('tie');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    } else if(playerOneSelection === 0 && playerTwoSelection === 1){
        win = 2;
        console.log('Player two');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    } else if(playerOneSelection === 0 && playerTwoSelection === 2){
        win = 1;
        console.log('Player one');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    } else if(playerOneSelection === 1 && playerTwoSelection === 0){
        win = 1;
        console.log('Player one');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    } else if(playerOneSelection === 1 && playerTwoSelection === 2){
        win = 2;
        console.log('Player two');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    } else if(playerOneSelection === 2 && playerTwoSelection === 0){
        win = 2;
        console.log('Player two');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    } else if(playerOneSelection === 2 && playerTwoSelection === 1){
        win = 1;
        console.log('Player one');
        playerOneSelection = 3;
        playerTwoSelection = 3;
    }
}

function nextRound(){
    for(let i = 0; i < 6; i++){
        choice[i].style.transform = 'scale(1)';
        choice[i].style.borderBottom = 'none';
    }
    if(score[0] >= 5){
        addOver();
    }
    if(score[1] >= 5){
        addOver();
        document.querySelector('.over-text').textContent = 'Player 2 won!';
    }
}

function liveScore(){
    if(win === 1 && playerOneSelection === 3){
        score[0]++;
        playerScore.textContent = score[0];
        textScore.textContent = 'Player 1 won!';
    } else if(win === 2 && playerOneSelection === 3){
        score[1]++;
        computerScore.textContent = score[1];
        textScore.textContent = 'Player 2 won!';
    } else if (win === 0 && playerOneSelection === 3){
        textScore.textContent = 'Tie';
    }
}

function removeOver(){
    gameOver.classList.add('hidden');
    background.classList.add('hidden');
    fullscreen.classList.remove('hidden');

}

function addOver(){
    gameOver.classList.remove('hidden');
    background.classList.remove('hidden');
}
    
closeBtn.addEventListener('click', removeOver)
background.addEventListener('click', removeOver)
fullscreen.addEventListener('click', function(){
    addOver();
})

const choice = [rock, paper, scissors, rock2, paper2, scissors2];

function lessCode(){
    for(let i = 0; i < 3; i++){
        choice[i].addEventListener('click', function(){
            choice[i].style.transform = 'scale(1.5)';
            choice[i].style.borderBottom = '1px solid #f1f3f5';
            if(i === 0){
                playerOneSelection = 0;
            }
            if(i === 1){
                playerOneSelection = 1;
            }
            if(i === 2){
                playerOneSelection = 2;
            }
            winnerMultiplayer();
            setTimeout(nextRound, 300)
            liveScore();
        })
    }
    for(let j = 3; j < 6; j++){
        choice[j].addEventListener('click', function(){
            choice[j].style.transform = 'scale(1.5)';
            choice[j].style.borderBottom = '1px solid #f1f3f5';
            if(j === 3){
                playerTwoSelection = 0;
            }
            if(j === 4){
                playerTwoSelection = 1;
            }
            if(j === 5){
                playerTwoSelection = 2;
            }
            winnerMultiplayer();
            setTimeout(nextRound, 300)
            liveScore();
        })
    }
}
lessCode();

againBtn.addEventListener('click', function(){
    // gameOver.classList.add('hidden');
    // background.classList.add('hidden');
    // fullscreen.classList.add('hidden');
    // score = [0, 0];
    // playerScore.textContent = '0';
    // computerScore.textContent = '0';
    // textScore.textContent = '';
    // playerOneSelection = 3;
    // playerTwoSelection = 3;
    location.reload();
});