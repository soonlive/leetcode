/**
 * Created by Xin on 2022/5/24.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

  let res = [];

  candidates.sort();

  let backtrack = (nums, track, start, sum) => {
    if(sum === target){
      res.push([...track]);
      return;
    }

    if(sum > target){
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (nums[i] > target || (i > start && nums[i] === nums[i - 1])) {
        continue;
      }
      let num = nums[i];
      track.push(num);
      sum += num;
      backtrack(nums, track, i + 1, sum);
      sum -= num;
      track.pop();
    }
  }

  backtrack(candidates, [], 0, 0);

  return res;
};
