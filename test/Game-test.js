const { assert } = require('chai');
const Game = require('../lib/Game');
const GamePiece = require('../lib/GamePiece');
const Player = require('../lib/Player');

const ctx = {
  canvas: {
    width: 800,
    height: 400,
  }
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

  it('should start off with properties', () => {
    let game = new Game(ctx)
    assert.deepEqual(game, {
      ctx: ctx,
      paused: false,
      gameOver: false,
      players: [
      new Player(100, 200, 10, 10, '#fb983b', 1),
      new Player(700, 200, 10, 10, '#b6fdf4', -1),
      ],
      trails: [],
    });
  });

    it('should animate each player as the game loops', function() {
    let game = new Game(ctx)
    ctx.fillRect = () => {};

    game.animate(ctx);
    assert.equal(game.players[0].x, 101);
    assert.equal(game.players[1].x, 699);
  });

  it('should end the game if player collides with other player\'s trail', () => {
    const game = new Game(ctx);
    ctx.fillRect = () => {};
    const player1 = game.players[0];
    const player2 = game.players[1];
    player1.x = player2.x;
    player1.y = player2.y;
    game.animate()
    game.collidingWithTrail(player1, player2);
    
    assert.isTrue(game.gameOver);
  });

  it('should be able to end game', () => {
    const game = new Game(ctx);

    game.endGame();

    assert.isTrue(game.gameOver);
  })

  it('should be able to increase in speed', () => {
    const game = new Game(ctx);
    const player1 = game.players[0];
    const player2 = game.players[1];

    game.increaseSpeed();

    assert.equal(player1.dxv, 2);

  })

  it('should be able to be over', () => {
    const game = new Game(ctx);
    game.endGame();
    game.isOver();

    assert.isTrue(game.gameOver)
  })
})