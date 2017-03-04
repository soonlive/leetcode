/**
 * Created by Xin on 04/03/2017.
 */
test('121. Best Time to Buy and Sell Stock', () => {
  const maxProfit = require('../121. Best Time to Buy and Sell Stock');
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});
