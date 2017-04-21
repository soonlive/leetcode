/**
 * Created by Xin on 25/02/2017.
 *
 *  dp(i) =  max(A[i], dp(i-1) + A[i])
 */
test('53. Maximum Subarray', () => {
  const maxSubArray = require('../53. Maximum Subarray');
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});
