const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, dx) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.dx = dx;
    this.lives = 3;
    this.dxv = 1;
    this.dyv = 1;
  }

  draw(ctx) {
    const {x, y, height, width, color } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  playerDies() {
    if (this.lives > 0) {
      this.lives--;
    }
  }
};