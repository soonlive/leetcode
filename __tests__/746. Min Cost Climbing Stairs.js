/**
 * Created by Xin on 25/12/2019.
 * dp[i]=min(dp(i-1),dp(i-1)+cost[i])
 *
 *
 */

test('746. Min Cost Climbing Stairs\n', () => {
  const minCostClimbingStairs = require('../746. Min Cost Climbing Stairs');
  expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6);
  expect(minCostClimbingStairs([0,0,0,0])).toEqual(0);
});
