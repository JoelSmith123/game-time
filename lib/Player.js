const GamePiece = require('./GamePiece');

module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, dx) {
    super(x, y, height, width, color);
    this.dx = dx;
    this.lives = 3;
    this.dxv = 1;
    this.dyv = 1;
  }

  playerDies() {
    if (this.lives > 0) {
      this.lives--;
    }
  }
};