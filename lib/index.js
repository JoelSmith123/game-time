const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

let tempPlayerOneScore = game.playerOneScore;
let tempPlayerTwoScore = game.playerTwoScore;

const newGameBtn = document.querySelector('.new-game-btn');
newGameBtn.addEventListener('click', startNewGame);

const newRoundBtn = document.querySelector('.new-round-btn');
newRoundBtn.addEventListener('click', startNewRound);

const gameStatusText = document.querySelector('.game-over');
const playerWonText = document.querySelector('.players-won');
const playerScoresText = document.querySelector('.players-scores');
const playerOneWonText = document.querySelector('.player1-won');
const playerTwoWonText = document.querySelector('.player2-won');
let playerOneScoreText = document.querySelector('.player1-score');
let playerTwoScoreText = document.querySelector('.player2-score');

playerScoresText.style.visibility = "hidden";
gameStatusText.style.visibility = "hidden";


playerOneWonText.style.visibility = "hidden";
playerTwoWonText.style.visibility = "hidden";

function startNewGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameStatusText.style.visibility = 'hidden';
  playerOneWonText.style.visibility = 'hidden';
  playerTwoWonText.style.visibility = 'hidden';
  playerScoresText.style.visibility ='hidden';
  const game = new Game(ctx);

  // window.requestAnimationFrame(gameLoop);
  gameLoop();
  // new Game(ctx);
  game.animate();
  // Start animation loop
  function gameLoop () {
  
    if (game.isOver()) {
      gameStatusText.style.visibility = "initial";
      playerScoresText.style.visibility = 'initial';
      playerOneScoreText = tempPlayerOneScore;
      playerTwoScoreText = tempPlayerTwoScore;
      return;  
    } else {
      game.animate();
      playerOneScoreText = tempPlayerOneScore;
      playerTwoScoreText = tempPlayerTwoScore;
    }
  
    // prepare to draw next frame
    window.requestAnimationFrame(gameLoop)
    document.addEventListener('keydown', handleKeyPress);
        
    function handleKeyPress(e) {
      game.handleKeyPress(e);
    }
  }
}

function startNewRound() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameStatusText.style.visibility = 'hidden';
  playerOneWonText.style.visibility = 'hidden';
  playerTwoWonText.style.visibility = 'hidden';

  const game = new Game(ctx);

  // window.requestAnimationFrame(gameLoop);
  gameLoop();
  // new Game(ctx);
  game.animate();
  // Start animation loop
  function gameLoop () {
  
    if (game.isOver()) {
      gameStatusText.style.visibility = "initial";
      playerScoresText.style.visibility = 'initial';
      playerWonText.style.visibility = 'initial';
      playerOneScoreText = tempPlayerOneScore;
      playerTwoScoreText = tempPlayerTwoScore;
;      return;  
    } else {
      game.animate();
      playerOneScoreText = tempPlayerOneScore;
      playerTwoScoreText = tempPlayerTwoScore;
    }
  
    // prepare to draw next frame
    window.requestAnimationFrame(gameLoop)
    document.addEventListener('keydown', handleKeyPress);
        
    function handleKeyPress(e) {
      game.handleKeyPress(e);
    }
  }

}








