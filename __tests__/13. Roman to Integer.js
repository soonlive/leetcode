/**
 * Created by Xin on 24/08/2018.
 *
 */
test('', () => {
  const foo = require('../13. Roman to Integer');
  expect(foo('MCMXCIV')).toEqual(1994);
  expect(foo('LVIII')).toEqual(58);
  expect(foo('III')).toEqual(3);
});
