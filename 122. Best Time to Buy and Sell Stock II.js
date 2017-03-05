/**
 * Created by Xin on 05/03/2017.
 */
/**
 * dp(i) = dp(i-1) + max(A[i] - A[i-1])
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = profit + Math.max(prices[i] - prices[i - 1], 0);
  }

  return profit;
};

module.exports = maxProfit;