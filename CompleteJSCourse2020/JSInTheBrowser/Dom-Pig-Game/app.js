/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;


init();




//document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// this allows us to select elements in exactly the same way as we do
// in css. The only difference being it only selects the first element that it finds
var x = document.querySelector('#score-0').textContent;
console.log(x);


// function btn() {
//     //Do something
// }

// in this example btn is a 'call-back function' because it is not
// called by us, but by another function. 
// it is a function that we pass into another function as an argument
// document.querySelector('.btn-roll').addEventListener('click', btn);

/* alternatively we can achieve the same thing without using an external function.
  in this case we would write the function within the brackets as an argument
 this is what we call an 'anonamous function' - because it doesn't have a name 
 and cannot be reused.
*/

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random()*6) + 1;
        // 2. Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. Update the round score IF the rolled number was not a 1
        if (dice !== 1) {
            //add score
            roundScore += dice;
            // display updated value in UI
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();

        }
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //add current score to players global score
        scores[activePlayer] += roundScore;
        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //change active player
            nextPlayer()
        }
    }
    
   

})

//implement a whole new function for chaning player to avoid repeating code - DRY principle
function nextPlayer() {
    // use the tertiary operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    /* same as writing 
         if(activePlayer === 0) {
             activePlayer = 1;
         } else {
             activePlayer = 0;
         }
     */
     roundScore = 0;
     //update UI
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     
     // update UI to show active player
     // classList.toggle is like using an if statement to check which player
     // is currently active. 
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     // update UI to hide dice
     document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

// init function for new window / new game
function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // hide the dice
    document.querySelector('.dice').style.display = 'none';

    // initialise all values in the game to read 0
    // getElementById is faster than querySelector
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    


}







