/**
 * Created by Xin on 25/02/2017.
 */
test('412. Fizz Buzz', () => {
  const fizzBuzz = require('../412. Fizz Buzz');
  expect(fizzBuzz(15)).toEqual([
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz'
  ]);
});
