/**
 * Created by Xin on 2022/5/24.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

  let res = [];

  nums.sort();

  let backtrack = (ns, track, used) => {

    if(ns.length === track.length){
      res.push([...track]);
      return;
    }

    for (let i = 0; i < ns.length; i++) {
      if(used[i] || ( i> 0 && ns[i] === ns[i-1] && !used[i-1])){
        continue;
      }
      let n = ns[i];
      track.push(n);
      used[i] = true;
      backtrack(ns, track, used)
      track.pop();
      used[i] = false;
    }
  };


  backtrack(nums, [], []);

  return res;

};
