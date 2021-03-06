// const Block = require('./Block');
const Trail = require('./Trail');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.players = [
      new Player(100, 200, 10, 10, '#fb983b', 1),
      new Player(700, 200, 10, 10, '#b6fdf4', -1),
    ];

    this.trails = [];
  }

  animate() {
    this.players.forEach( player => {
      const x = player.x;
      const y = player.y;
      const height = player.height;

      this.trails.push(new Trail(x, y, height, player.width, player.color));
      this.handleplayer(player);
      this.collidingWithTrail(this.players[0], this.players[1]);
      player.draw(this.ctx);
    });
  }

  increaseSpeed() {
    this.players.forEach( player => {
      player.dxv++;
      player.dyv++;
    });
  }

  collidingWithTrail(player1, player2) {
    this.trails.forEach( trail => {
      if (trail.color === '#fb983b' && trail.isCollidingWith(player2)) {
        player1.playerDies();
        this.endGame();
      }  else if (trail.color === '#b6fdf4' && trail.isCollidingWith(player1)) {
        player2.playerDies();
        this.endGame();
      }
    });
  }

  handleplayer(player) {
    const { canvas } = this.ctx;

    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
      player.playerDies();
      this.endGame(); 

    } else {
      player.move();
    }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
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
};