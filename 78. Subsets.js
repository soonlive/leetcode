/**
 * Created by Xin on 2022/5/23.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

  let res = [];

  let backtrack = function(ns, track){
    res.push([...track]);

    for (let i = 0; i < ns.length; i++) {
      let n = ns[i];
      track.push(n);
      backtrack(ns.slice(i+1), track );
      track.pop();
    }
  };

  backtrack(nums, [])

  return res;
};
