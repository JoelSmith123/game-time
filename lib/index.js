const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const newGameBtn = document.querySelector('.new-game-btn');
let gameCounter = 0;

newGameBtn.addEventListener('click', startNewGame);

function startNewGame() {
  if (gameCounter < 1) {
    gameCounter++;

    console.log('new game')

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const game = new Game(ctx);
    console.log(game.players[0].lives)
    console.log(game.players[1].lives)

    gameLoop();
    function gameLoop () {
      if (game.isOver()) {
          getScore();
        return;  
      } else {
        game.animate();
      }

    window.requestAnimationFrame(gameLoop);
    document.addEventListener('keydown', handleKeyPress);

    function handleKeyPress(e) {
      game.handleKeyPress(e);
    }
  }
  
} else if (gameCounter < 3 && gameCounter >= 1) {
  gameCounter++;

    console.log('new round')
    console.log(game.players[0].lives)
    console.log(game.players[1].lives)

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.players[0].x = 100;
  game.players[0].y = 200;
  game.players[1].x = 700;
  game.players[1].y = 200;  

  // game.increaseSpeed();
  getScore();
  gameLoop();
  function gameLoop () {
    if (game.isOver()) {
        getScore();
      return;  
    } else {
      game.animate();
    }

    window.requestAnimationFrame(gameLoop);
    document.addEventListener('keydown', handleKeyPress);

    function handleKeyPress(e) {
      game.handleKeyPress(e);
    } 
  }
  getScore();
    if (gameCounter >= 3) {
      gameCounter = 0;
    }
  } 
} 

function getScore() {
  let playerOneScore = document.querySelector('.player1-score');
  let playerTwoScore = document.querySelector('.player2-score');

  playerOneScore.innerHTML = game.players[0].lives;
  playerTwoScore.innerHTML = game.players[1].lives;
}