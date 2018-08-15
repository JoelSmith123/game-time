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
  it.skip('should end the game if block collides with wall', () => {
    //Setup
    const game = new Game(ctx);
    const block = game.blocks[0];

    block.x = ctx.canvas.width;

    //Execution
    game.handleBlock(block);

    //Assertion
    assert.isTrue(game.gameOver);
  })

  it('should take properties', () => {})

  it.skip('should collide with walls', () => {})

  it('should be able to move', () => {
    //Setup
    const game = new Game(ctx);
    const block = game.blocks[0];

    // let x = GamePiece.x;
    // console.log(game.block.GamePiece.x);

    //Execution
    block.move();
    let x = block.x;
    //Assertion
    assert.equal(x, 55)
  })


  it.skip('should be able to changeDirection', () => {})
})