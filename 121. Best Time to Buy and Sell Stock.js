/**
 * Created by Xin on 04/03/2017.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {

    if (prices[i] - prices[i - 1] > profit) {
      profit = prices[i] - prices[i - 1];
    }

    if (prices[i] > prices[i - 1]) {
      prices[i] = prices[i] ^ prices[i - 1];
      prices[i - 1] = prices[i] ^ prices[i - 1];
      prices[i] = prices[i] ^ prices[i - 1];
    }
  }

  return profit;
};

module.exports = maxProfit;