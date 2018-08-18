const { assert } = require('chai');
const Game = require('../lib/Game');
const GamePiece = require('../lib/GamePiece');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  it('should end the game if block collides with wall', () => {
    //Setup
    const game = new Game(ctx);
    const player = game.players[0];
    player.x = ctx.canvas.width;
    player.isCollidingWithWall( ctx.canvas.width, ctx.canvas.height)
    //Execution
    game.handleplayer(player);

    //Assertion
    assert.isTrue(game.gameOver);
  })

  it.skip('should take properties', () => {})

  it.skip('should collide with walls', () => {})

  it.skip('should be able to move', () => {
    //Setup
    const game = new Game(ctx);
    const block = game.blocks[0];

    //Execution
    block.move();
    let x = block.x;
    //Assertion
    assert.equal(x, 55)
  })


  it.skip('should be able to changeDirection', () => {})
})