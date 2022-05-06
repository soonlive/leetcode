/**
 * Created by Xin on 2022/5/6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort();
  for(let i =0;i<nums.length;){
    if(nums[i] !== nums[i+1]){
      return nums[i];
    }else{
      i +=2;
    }
  }
};
