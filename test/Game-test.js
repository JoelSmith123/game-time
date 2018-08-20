const { assert } = require('chai');
const Game = require('../lib/Game');
const GamePiece = require('../lib/GamePiece');
const Player = require('../lib/Player');

const ctx = {
  canvas: {
    width: 800,
    height: 400
  };
};

describe('Game', () => {
  it('should end the game if block collides with wall', () => {
    const game = new Game(ctx);
    const player = game.players[0];
    player.x = ctx.canvas.width;
    player.isCollidingWithWall( ctx.canvas.width, ctx.canvas.height)
    game.handleplayer(player);
    
    assert.isTrue(game.gameOver);
  });

  it('should take properties', () => {
    let game = new Game(ctx)
    assert.deepEqual(game, {
      ctx: ctx,
      paused: false,
      gameOver: false,
      players: [
      new Player(100, 300, 10, 10, '#fb983b', 1),
      new Player(500, 300, 10, 10, '#b6fdf4', -1),
      ],
      trails: [],
    });
  });
})