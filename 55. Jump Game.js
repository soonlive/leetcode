/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let final = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    final = Math.max(i + num, final);
    if(i !== nums.length -1 && final <= i){
      return false;
    }
  }

  return final >= nums.length - 1;
};
