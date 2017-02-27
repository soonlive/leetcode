/**
 * Created by Xin on 27/02/2017.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = 0;
  let d = [];
  for (let i = 0; i < nums.length; i++) {
    d[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && d[j] + 1 > d[i]) {
        d[i] = d[j] + 1;
      }
    }
    if (len < d[i]) {
      len = d[i];
    }

  }

  return len;


};

module.exports = lengthOfLIS;
