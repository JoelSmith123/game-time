const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  let gamepiece; 

  beforeEach(() => {
    gamepiece = new GamePiece(100, 100, 10, 10, 'green')
  })

  it('should take properties', () => {
    
    assert.deepEqual(gamepiece, {
      x: 100,
      y: 100,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
  });

  it('should collide with object', () => {
    assert.isTrue(gamepiece.isCollidingWith(gamepiece));
  })

  it('should collide with walls', () => {
    gamepiece.x = 800;

    assert.isTrue(gamepiece.isCollidingWithWall(800, 400));
  })

  it('should be able to be drawn', () => {
    let ctx = {};
    ctx.fillRect = () => {};
    gamepiece.color = 'blue';
    gamepiece.draw(ctx);
    assert.isTrue(ctx.fillStyle == 'blue');
  })

  it('should be able to move', () => {
    gamepiece.move();
    let x = gamepiece.x;

    assert.equal(x, 101)
  });

  it('should be able to changeDirection', () => {
    let startingDirection = gamepiece.dx;
    gamepiece.changeDirection(gamepiece.dx);
    let nextDirection = gamepiece.dx;

    assert.isTrue(startingDirection !== nextDirection);
  })
})