const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const gameStatusText = document.querySelector('h1');
const playerWonText = document.querySelector('.players-won');
const playerScoresText = document.querySelector('.players-scores');
const playerOneWonText = document.querySelector('.player1-won');
const playerTwoWonText = document.querySelector('.player2-won');


playerScoresText.style.visibility = "hidden";
gameStatusText.style.visibility = "hidden";


playerOneWonText.style.visibility = "hidden";
playerTwoWonText.style.visibility = "hidden";


// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    gameStatusText.style.visibility = "initial";
    playerScoresText.style.visibility = "initial";
    // playerOneWonText.style.visibility = "initial";
    // playerTwoWonText.style.visibility = "initial";


  } else {
    // clear previous frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

