/**
 * Created by Xin on 24/08/2018.
 *
 */
// dirname()
test('', () => {
  const foo = require('../20. Valid Parentheses');
  expect(foo('{[]}')).toEqual(true);
  expect(foo('(]')).toEqual(false);
});
