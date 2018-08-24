/**
 * Created by Xin on 24/08/2018.
 *
 */
test('1. Two Sum', () => {
  const twoSum = require('../1. Two Sum');
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
