/**
 * Created by Xin on 21/04/2017.
 */
/**
 * dp(i) = dp(i-1) + dp(i-2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1];
};

module.exports = climbStairs;