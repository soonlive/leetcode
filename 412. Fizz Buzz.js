/**
 * Created by Xin on 25/02/2017.
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return new Array(n).fill().map((a, i) => {
    var v = i + 1;
    var r;
    if (v % 3 === 0) {
      r = 'Fizz';
      if (v % 5 === 0) {
        r = r + 'Buzz';
      }
    } else if (v % 5 === 0) {
      r = 'Buzz';
      if (v % 3 === 0) {
        r = 'Fizz' + r;
      }
    } else {
      r = v.toString();
    }
    return r;
  });
};


module.exports = fizzBuzz;
