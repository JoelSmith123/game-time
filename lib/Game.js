// const Block = require('./Block');
const Trail = require('./Trail');
const Player = require('./Player');

const playerWonText = document.querySelector('.players-won');
const playerOneWonText = document.querySelector('.player1-won');
const playerTwoWonText = document.querySelector('.player2-won');
const playerOneScoreText = document.querySelector('.player1-score');
const playerTwoScoreText = document.querySelector('.player2-score');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;

    this.players = [
      new Player(100, 300, 10, 10, 'red', 1), //Player 1 left
      new Player(500, 300, 10, 10, 'green', -1), //Player 2 right
    ];

    this.trails = [];
    console.log(this.trails);
  }


  // draw one frame of our game
  animate() {
    // draw everything here
    this.players.forEach( player => {
      this.trails.push(new Trail(player.x, player.y, player.height, player.width, player.color));
      this.handleplayer(player);
      player.draw(this.ctx);
    })

    // this.trails.forEach(trail => {
    //   trail.draw(this.ctx)
    // }
  }

  handletrail(trail) {
    const { canvas } = this.ctx;
  }

  handleplayer(player) {
    const playerOneWonText = document.querySelector('.player1-won');
    const playerTwoWonText = document.querySelector('.player2-won');
    const { canvas } = this.ctx;
    if (this.players[1].isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(); 
        playerOneWonText.style.visibility = "initial";
        this.playerOneScore = this.playerOneScore + 0.5;
    } else if (this.players[0].isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(); 
        playerTwoWonText.style.visibility = "initial";
        this.playerTwoScore++; 
    } else if (this.players[0].isCollidingWith(this.players[1])) {
      this.endGame();
      console.log('Player 0 hit player 1')
    } else if (this.players[1].isCollidingWith(this.players[0])) {
      this.endGame();
      console.log('Player 1 hit player 0')

    } else {
      player.move();
    }
    playerOneScoreText.innerText = this.playerOneScore;
    playerTwoScoreText.innerText = this.playerTwoScore;
  }

  startNewGame() {
    console.log('starting new game');
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

     if (e.key === 'd' || e.key === 'D') {
      direction.dx = 1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'a' || e.key === 'A') {
      direction.dx = -1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 's' || e.key === 'S') {
      direction.dy = 1;
      this.players[0].changeDirection(direction);

    } else if (e.key === 'w' || e.key === 'W') {
      direction.dy = -1;
      this.players[0].changeDirection(direction);



    } else if (e.key === 'ArrowRight') {
      direction.dx = 1;
      this.players[1].changeDirection(direction);
    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;
      this.players[1].changeDirection(direction);

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
      this.players[1].changeDirection(direction);
    } 
  }
}