/**
 * Created by Xin on 2020/4/30.
 *
 */

test('Can you get the loop', () => {
  const loop_size = require('../Can you get the loop');


  expect(loop_size([10, 15, 20])).toEqual(15);
  expect(loop_size([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6);
  expect(loop_size([0,0,0,0])).toEqual(0);
});
