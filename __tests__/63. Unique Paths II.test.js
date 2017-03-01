/**
 * Created by Xin on 01/03/2017.
 */
test('63. Unique Paths II', () => {
  const uniquePathsWithObstacles = require('../63. Unique Paths II');

  expect(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])).toEqual(2);

  expect(uniquePathsWithObstacles([
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 0]
  ])).toEqual(1);

  expect(uniquePathsWithObstacles([
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0]
  ])).toEqual(0);


  expect(uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ])).toEqual(6);
});