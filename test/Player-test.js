const { assert } = require('chai');
const Player = require('../lib/Player.js')

describe('Player', () => {
  let player; 

  beforeEach(() => {
    player = new Player(100, 100, 10, 10, 'green', 1)
  });

  it('should take properties', () => {  
    
    assert.deepEqual(player, {
      x: 100,
      y: 100,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1,
      lives: 3,
    })
  });

  it('should be able to move', () => {
    player.move();
    let x = player.x;

    assert.equal(x, 101)
  });

  it('should collide with walls', () => {
    player.x = 800;

    assert.isTrue(player.isCollidingWithWall(800, 400));
  })

  it('should be able to changeDirection', () => {
    let startingDirection = player.dx;
    player.changeDirection(player.dx);
    let nextDirection = player.dx;

    assert.isTrue(startingDirection !== nextDirection);
  })
})