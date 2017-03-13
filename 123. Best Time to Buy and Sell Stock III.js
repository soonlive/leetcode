/**
 * Created by Xin on 06/03/2017.
 */
/**
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  let lprofits = [0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      min = Math.min(prices[i - 1], min);
      profit = Math.max(prices[i] - min, profit);
    }
    lprofits[i] = profit;
  }

  profit = 0;
  let rprofits = [];
  rprofits[prices.length - 1] = 0;
  let max = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; --i) {
    if (prices[i + 1] > prices[i]) {
      max = Math.max(prices[i + 1], max);
      profit = Math.max(max - prices[i], profit);
    }
    rprofits[i] = profit;
  }

  profit = 0;

  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(lprofits[i] + rprofits[i], profit);
  }

  return profit;
};

module.exports = maxProfit;