/**
 * Created by Xin on 2022/3/17.
 */

test('35. Search Insert Position', () => {
  const foo = require('../35. Search Insert Position');
  expect(foo([1,3,5,6], 5)).toEqual(2);
  expect(foo([1,3,5,6], 2)).toEqual(1);
  expect(foo([1,3,5,6], 7)).toEqual(4);
});
