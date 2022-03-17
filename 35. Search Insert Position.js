/**
 * Created by Xin on 2022/3/17.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pos = nums.length;

  for(let i = 0; i < nums.length; ++i){
    if(nums[i] >= target){
      pos = i;
      break;
    }
  }
  return pos;
};


module.exports = searchInsert;
