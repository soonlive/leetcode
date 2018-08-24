/**
 * Created by Xin on 2018/8/24.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = new Map();
  for(let i =0;i<nums.length;++i){
    let delta = target - nums[i];
    if(map.has(delta)){
      return [map.get(delta), i]
    }else{
      map.set(nums[i],i);
    }
  }
};

module.exports = twoSum;
