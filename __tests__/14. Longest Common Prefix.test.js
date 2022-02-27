/**
 * Created by Xin on 24/08/2018.
 *
 */
// dirname()
test('', () => {
  const foo = require('../14. Longest Common Prefix');
  expect(foo(['flower','flow','flight'])).toEqual('fl');
  expect(foo(['dog','racecar','car'])).toEqual('');
});
