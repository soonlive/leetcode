/**
 * Created by Xin on 01/03/2017.
 */
test('64. Minimum Path Sum', () => {
  const minPathSum = require('../64. Minimum Path Sum');

  expect(minPathSum([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])).toEqual(12);

  expect(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])).toEqual(7);
});