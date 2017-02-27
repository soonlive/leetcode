/**
 * Created by Xin on 27/02/2017.
 */
test('300. Longest Increasing Subsequence', () => {
  const LIS = require('../300. Longest Increasing Subsequence');
  expect(LIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
  expect(LIS([1, 9, 2, 5, 3, 7, 101, 18])).toEqual(5);
  expect(LIS([1])).toEqual(1);
  expect(LIS([0])).toEqual(1);
  expect(LIS([0,3,1,5])).toEqual(3);
});