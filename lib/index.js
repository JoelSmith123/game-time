const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const newGameBtn = document.querySelector('.new-game-btn');
newGameBtn.addEventListener('click', startNewGame);

function startNewGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const game = new Game(ctx);

  // window.requestAnimationFrame(gameLoop);
  gameLoop();
  // new Game(ctx);
  game.animate();


  // Start animation loop

  function gameLoop () {
  
    if (game.isOver()) {
      console.log('Game Over');
      return;
  
    } else {
      // clear previous frame
      // ctx.clearRect(0, 0, canvas.width,  canvas.height);
  
      // draw this frame
      game.animate();
    }
  
    // prepare to draw next frame
    window.requestAnimationFrame(gameLoop)
  }

<<<<<<< HEAD
  // Add key press event handler
  document.addEventListener('keydown', handleKeyPress);
  
  
  function handleKeyPress(e) {
    game.handleKeyPress(e);
=======
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
>>>>>>> b42abf204697747d01ad29d409d3bbe35030a2ce
  }

}

// // Add key press event handler
// document.addEventListener('keydown', handleKeyPress);


// function handleKeyPress(e) {
//   game.handleKeyPress(e);
// }

