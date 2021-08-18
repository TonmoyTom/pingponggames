'use strict';


var player0El01 = document.querySelector('.player--0');
var player1El02 = document.querySelector('.player--1');
var score0El01 = document.querySelector('#score--0');
var score1El02 = document.querySelector('#score--1');
var currentscore0El01 = document.querySelector('#current--0');
var currentscore1El02 = document.querySelector('#current--1');
var diceEL = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');



// score0El01.textContent = 0;
// score1El02.textContent = 0;

let score, cureentScore,activePlayer , playing;



const init = function(){
    score = [0, 0]
    cureentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEL.classList.add('hidden');
    score0El01.textContent = 0;
    score1El02.textContent = 0;
    currentscore0El01.textContent = 0;
    currentscore1El02.textContent = 0;
    player0El01.classList.remove('player--winner');
    player1El02.classList.remove('player--winner');
    player0El01.classList.add('player--active');
    player1El02.classList.remove('player--active');

}

init();

const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
    cureentScore = 0;
    player0El01.classList.toggle('player--active');
    player1El02.classList.toggle('player--active');
}



btnRoll.addEventListener('click', function () {
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1;



        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;
    
    
        if (dice !== 1) {
            cureentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = cureentScore;
        } else {
            switchPlayer();
        }
    }
   
})

btnHold.addEventListener('click', function () {
    if(playing){
        score[activePlayer] += cureentScore;

        // console.log(score[activePlayer]);
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    
        if( score[activePlayer]  >= 20){
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        switchPlayer();
    }
    
})

btnNew.addEventListener('click', init)
