/**
 * Created by Xin on 05/03/2017.
 */
test('122. Best Time to Buy and Sell Stock II', () => {
  const maxProfit = require('../122. Best Time to Buy and Sell Stock II');
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  expect(maxProfit([1,2,3,4,5,6,7])).toEqual(6);
});