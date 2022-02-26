/**
 * Created by Xin on 2022/2/26.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = Number(String(Math.abs(x)).split('').reverse().join(''));
  return x > 0?res:-1*res;
};

module.exports = reverse;
