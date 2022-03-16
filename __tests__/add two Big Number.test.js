/**
 * Created by Xin on 2022/3/16.
 */

test('add two Big Number', () => {
  const addTwoBigNumber = require('../add two Big Number');
  expect(addTwoBigNumber('11111111111111111111', '22222222222222222222')).toEqual('33333333333333333333');
  expect(addTwoBigNumber('4311111111111111111111', '22222222222222222222')).toEqual('4333333333333333333333');
  expect(addTwoBigNumber('123', '456')).toEqual('579');
});
