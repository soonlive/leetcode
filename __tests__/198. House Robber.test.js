/**
 * Created by Xin on 21/04/2017.
 * dp(i) = dp(i-1) + dp(i-2)
 *
 *
 */

test('70. Climbing Stairs', () => {
  const rob = require('../198. House Robber');
  expect(climbStairs(6)).toEqual(13);
  expect(climbStairs(3)).toEqual(3);
  expect(climbStairs(3)).toEqual(3);
});
