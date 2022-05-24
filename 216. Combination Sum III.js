/**
 * Created by Xin on 2022/5/24.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

  let res = [];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let backtrack = (ns, track, sum, used, start) => {

    if (sum === n && k === track.length) {
      res.push([...track]);
      return;
    }

    if (sum > n) {
      return;
    }

    if (track.length > k) {
      return;
    }


    for (let i = start; i < ns.length; i++) {
      if (used[i] || ns[i] > n) {
        continue;
      }

      let num = ns[i];
      track.push(num);
      used[i] = true;
      backtrack(ns, track, sum + num, used, i +1);
      track.pop();
      used[i] = false;
    }
  };

  backtrack(nums, [], 0, [], 0);

  return res;
};
