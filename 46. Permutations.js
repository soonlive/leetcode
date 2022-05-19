/**
 * Created by Xin on 2022/5/19.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

  let res = [];

  let backtrack = function (ns, track) {
    if (ns.length === track.length) {
      res.push(track);
    }

    for (let num of ns) {
      if (track.includes(num)) {
        continue
      }

      backtrack(ns, track.concat(num));
    }

  }

  backtrack(nums, [])
  return res;
};
