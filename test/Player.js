const { assert } = require('chai');
const Player = require('../lib/Player.js')

describe('Player', () => {
  let player; 

  beforeEach(() => {
    player = new Player(100, 100, 10, 10, 'green', 1)
  });


  // FINISHED
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
      dyv: 1
      lives = 0;
    })
  });

  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})

// Setup
// Execution
// Assertion