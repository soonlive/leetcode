/**
 * Created by Xin on 2022/5/24.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  let res = [];

  let backtrack = (ns, track, sum, start) => {
    if(sum === target){
      res.push([...track]);
      return;
    }

    if(sum>target){
      return;
    }

    for (let i = start; i < ns.length; i++) {
      let n = ns[i];
      track.push(n);
      backtrack(ns, track, sum + n, i);
      track.pop();
    }
  }

  backtrack(candidates, [], 0, 0);


  return res;
};
