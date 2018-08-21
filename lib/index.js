const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const newGameBtn = document.querySelector('.new-game-btn');

newGameBtn.addEventListener('click', startNewGame);

const newRoundBtn = document.querySelector('.new-round-btn');

newRoundBtn.addEventListener('click', startNewRound);

function startNewGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const game = new Game(ctx);

  gameLoop();
  game.animate();
  function gameLoop () {
      getScore();
    if (game.isOver()) {
      return;  
    } else {
      game.animate();
    }
  
    // prepare to draw next frame
    window.requestAnimationFrame(gameLoop);
    document.addEventListener('keydown', handleKeyPress);
        
    function handleKeyPress(e) {
      game.handleKeyPress(e);
    }
  }
}

function startNewRound() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const game = new Game(ctx);

  game.increaseSpeed();

  // window.requestAnimationFrame(gameLoop);
  gameLoop();
  game.animate();
  // Start animation loop
  function gameLoop () {
    if (game.isOver()) {
      return;  
    } else {
      game.animate();
    }
  
    // prepare to draw next frame
    window.requestAnimationFrame(gameLoop);
    document.addEventListener('keydown', handleKeyPress);
        
    function handleKeyPress(e) {
      game.handleKeyPress(e);
    }
  }
  getScore();
}

function getScore() {
  console.log(game.players[0].lives);
  let playerOneScore = document.querySelector('.player1-score');
  let playerTwoScore = document.querySelector('.player2-score');

  playerOneScore.innerHTML = game.players[0].lives;
  playerTwoScore.innerHTML = game.players[1].lives;
}