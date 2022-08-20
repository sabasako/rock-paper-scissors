'use strict';

const singleBtn = document.querySelector('.single-btn');
const multiplayerBtn = document.querySelector('.multiplayer-btn');
const gameSection= document.querySelector('.game');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const allImgs = document.querySelectorAll('.game-imgs');
const playerScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');
const textScore = document.querySelector('.score-text');
const closeBtn = document.querySelector('.close-outline');
const background = document.querySelector('.background');
const gameOver = document.querySelector('.game-over');
const fullscreen = document.querySelector('.full-screen');
const againBtn = document.querySelector('.again');


function removeOver(){
    gameOver.classList.add('hidden');
    background.classList.add('hidden');
    fullscreen.classList.remove('hidden');

}

function addOver(){
    gameOver.classList.remove('hidden');
    background.classList.remove('hidden');
}

let x;
let playerSelection;
let computerSelection;
let win;
let score = [0, 0];

function winner(){
    computerChoice.style.transform = 'scale(1.5)';
    computerChoice.style.borderBottom = '1px solid #f1f3f5';
    if(playerSelection === computerSelection){
        win = 0;
        // console.log('tie');
    } else if(playerSelection === 0 && computerSelection === 1){
        win = 2;
        // console.log('You lost');
    } else if(playerSelection === 0 && computerSelection === 2){
        win = 1;    
        // console.log('You win');
    } else if(playerSelection === 1 && computerSelection === 0){
        win = 1;
        // console.log('You win');
    } else if(playerSelection === 1 && computerSelection === 2){
        win = 2;
        // console.log('You lost');
    } else if(playerSelection === 2 && computerSelection === 0){
        win = 2;
        // console.log('You lost');
    } else if(playerSelection === 2 && computerSelection === 1){
        win = 1;
        // console.log('You win');
    }
}

function liveScore(){
    if(win === 1){
        score[0]++;
        playerScore.textContent = score[0];
        textScore.textContent = 'You won!';

    } else if(win === 2){
        score[1]++;
        computerScore.textContent = score[1];
        textScore.textContent = 'You lost!';
    } else if (win === 0){
        textScore.textContent = 'Tie';
    }
    // console.log(score);
}

function nextRound(){
    rock.style.transform = 'scale(1)';
    rock.style.borderBottom = 'none';
    paper.style.transform = 'scale(1)';
    paper.style.borderBottom = 'none';
    scissors.style.transform = 'scale(1)';
    scissors.style.borderBottom = 'none';
    computerChoice.style.transform = 'scale(1)';
    computerChoice.style.borderBottom = 'none';
    randomNumber = Math.floor(Math.random() * 3);
    computerChoice =  document.querySelector(`.game-imgs-${randomNumber}`)
    computerSelection = randomNumber;
    if(score[0] >= 5){
        addOver();
    }
    if(score[1] >= 5){
        addOver();
        document.querySelector('.over-text').textContent = 'You lost!';
    }
}


closeBtn.addEventListener('click', removeOver)
background.addEventListener('click', removeOver)
fullscreen.addEventListener('click', function(){
    addOver();
})

againBtn.addEventListener('click', function(){
    gameOver.classList.add('hidden');
    background.classList.add('hidden');
    fullscreen.classList.add('hidden');
    score = [0, 0];
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    textScore.textContent = '';
})


////////////////////////////////////////////////
//          Single Player Button              //
////////////////////////////////////////////////
let randomNumber = Math.floor(Math.random() * 3);
let computerChoice =  document.querySelector(`.game-imgs-${randomNumber}`)
computerSelection = randomNumber;
// console.log(randomNumber);


rock.addEventListener('click', function(){
    rock.style.transform = 'scale(1.5)';
    rock.style.borderBottom = '1px solid #f1f3f5';
    playerSelection = 0;
    computerChoice.style.transform = 'scale(1.5)';
    computerChoice.style.borderBottom = '1px solid #f1f3f5';
    winner();
    liveScore();
    setTimeout(nextRound, 300);
}) 

paper.addEventListener('click', function(){
    paper.style.transform = 'scale(1.5)';
    paper.style.borderBottom = '1px solid #f1f3f5';
    playerSelection = 1;
    computerChoice.style.transform = 'scale(1.5)';
    computerChoice.style.borderBottom = '1px solid #f1f3f5';
    winner();
    liveScore();
    setTimeout(nextRound, 300)
}) 

scissors.addEventListener('click', function(){
    scissors.style.transform = 'scale(1.5)';
    scissors.style.borderBottom = '1px solid #f1f3f5';
    playerSelection = 2;
    computerChoice.style.transform = 'scale(1.5)';
    computerChoice.style.borderBottom = '1px solid #f1f3f5';
    winner();
    liveScore();
    setTimeout(nextRound, 300)
}) 
