const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const newGameBtn = document.querySelector('.new-game-btn');
newGameBtn.addEventListener('click', startNewGame);

const newRoundBtn = document.querySelector('.new-round-btn');
newRoundBtn.addEventListener('click', startNewRound);

const gameStatusText = document.querySelector('.game-over');
const playerWonText = document.querySelector('.players-won');
const playerScoresText = document.querySelector('.players-scores');
const playerOneWonText = document.querySelector('.player1-won');
const playerTwoWonText = document.querySelector('.player2-won');
let playerOneScoreText = parseInt(document.querySelector('.player1-score').innerHTML);
let playerTwoScoreText = parseInt(document.querySelector('.player2-score').innerHTML);

playerScoresText.style.visibility = "hidden";
gameStatusText.style.visibility = "hidden";


playerOneWonText.style.visibility = "hidden";
playerTwoWonText.style.visibility = "hidden";

function startNewGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameStatusText.style.visibility = 'hidden';
  playerTwoWonText.style.visibility = 'hidden';
  playerScoresText.style.visibility ='hidden';
  console.log(Number.isInteger(playerOneScoreText));
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
      playerOneWonText.innerText('Player 1 Won!!');
      playerOneScoreText = game.playerOneScore;
      playerTwoScoreText = game.playerTwoScore;
      return;  
    } else {
      game.animate();
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
  let newRoundPlayerOneScore = playerOneScoreText;
  let newRouncPlayerTwoScore = playerTwoScoreText;

  const game = new Game(ctx, newRoundPlayerOneScore, newRouncPlayerTwoScore);

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
;      return;  
    } else {
      game.animate();
    }
  
    // prepare to draw next frame
    window.requestAnimationFrame(gameLoop)
    document.addEventListener('keydown', handleKeyPress);
        
    function handleKeyPress(e) {
      game.handleKeyPress(e);
    }
  }

}








