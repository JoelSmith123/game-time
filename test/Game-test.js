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
    const player = game.players[0];
    player.x = ctx.canvas.width;
    player.isCollidingWithWall( ctx.canvas.width, ctx.canvas.height)
    //Execution
    game.handleplayer(player);

    //Assertion
    assert.isTrue(game.gameOver);
  })

  it.skip('should take properties', () => {
    game = new Game(ctx)
    assert.deepEqual(game, {
      ctx: ctx,
      paused: false,
      gameOver: false,
      playerOneScore: this.playerOneScore || 0,
      playerTwoScore: this.playerTwoScore || 0,

      players: [
        new Player(100, 300, 10, 10, 'red', 1), //Player 1 left
        new Player(500, 300, 10, 10, 'green', -1), //Player 2 right
      ],

      trails: [],
    });
  });
  

  it.skip('should collide with walls', () => {})


// FINISHED 
  it('should be able to move', () => {
    const game = new Game(ctx);
    const player = game.players[0];

    player.move();
    let x = player.x;
    assert.equal(x, 101)
  });


  it.skip('should be able to changeDirection', () => {

    const game = new Game(ctx);
    const player = game.players[0];
    const dx = 0

    player.changeDirection();

    assert.equal(direction.dx, )


  })
})





