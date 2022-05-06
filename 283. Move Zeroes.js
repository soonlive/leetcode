/**
 * Created by Xin on 2022/5/6.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  for(let i =0;i<nums.length;++i){
    if(0===nums[i]){
      ++count;
    } else {
      [nums[i],nums[i-count]] = [nums[i-count],nums[i]];
    }
  }
};
