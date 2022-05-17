/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

  let dp = function (n) {
    let dp = [];
    dp[0] = 0;

    for (let i = 1; i <= n; ++i) {
      dp[i] = n + 1;
      for (let j = 0; j < coins.length; ++j) {
        let coin = coins[j];
        if (i >= coin) {
          dp[i] = Math.min(1 + dp[i - coin], dp[i]);
        }
      }
    }

    return dp[n] === n + 1 ? -1 : dp[n];
  }

  return dp(amount);
};
