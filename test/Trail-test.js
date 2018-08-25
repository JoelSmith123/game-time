const { assert } = require('chai');
const Trail = require('../lib/Trail.js');

describe('Trail', () => {
  let trail; 

  beforeEach(() => {
    trail = new Trail(100, 100, 10, 10, 'green')
  });

  it('should take properties', () => {      
    assert.deepEqual(trail, {
      x: 100,
      y: 100,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    });
  });

  it('should be able to be drawn', () => {
    let ctx = {};
    ctx.fillRect = () => {};
    trail.color = 'blue';
    trail.draw(ctx);
    assert.isTrue(ctx.fillStyle == 'blue');
  })

})