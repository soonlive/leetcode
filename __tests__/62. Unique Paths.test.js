/**
 * Created by Xin on 28/02/2017.
 */
test('62. Unique Paths', () => {
  const uniquePaths = require('../62. Unique Paths');
  expect(uniquePaths(1,1)).toEqual(1);
  expect(uniquePaths(3,3)).toEqual(6);
  expect(uniquePaths(4,3)).toEqual(10);
  expect(uniquePaths(5,5)).toEqual(70);
});