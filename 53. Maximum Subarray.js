/**
 * Created by Xin on 14/04/2017.
 */
/**
 *  dp(i) =  max(A[i], dp(i-1) + A[i])
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let d = [nums[0]];
  let max = nums[0];
  for(let i = 1; i < nums.length; i++){
    d[i] = Math.max(d[i - 1], 0) + nums[i];
    if(d[i] > max)
      max = d[i];
  }
  return max;
};

module.exports = maxSubArray;