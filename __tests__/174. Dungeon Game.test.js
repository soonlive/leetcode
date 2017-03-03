/**
 * Created by Xin on 02/03/2017.
 */
test('174. Dungeon Game', () => {
  const calculateMinimumHP = require('../174. Dungeon Game');

  expect(calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])).toEqual(7);


  expect(calculateMinimumHP([
    [100],
  ])).toEqual(1);

  expect(calculateMinimumHP([
    [-3, 5]
  ])).toEqual(4);

  expect(calculateMinimumHP([
    [0, 5],
    [-2, -3],
  ])).toEqual(1);

  expect(calculateMinimumHP([
    [0, -3],
  ])).toEqual(4);

  expect(calculateMinimumHP([
    [-1, 1],
  ])).toEqual(2);
  expect(calculateMinimumHP([
    [3, -20, 30],
    [-3, 4, 0],
  ])).toEqual(1);
  expect(calculateMinimumHP([
    [1, -2, 3],
    [2, -2, -2],
  ])).toEqual(2);
  expect(calculateMinimumHP([
    [1, -3, 3],
    [0, -2, 0],
    [-3, -3, -3],
  ])).toEqual(3);
});
