/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

  let res = [];

  nums.sort();

  let backtrack = (ns, track, used, start) => {

    res.push([...track])

    for (let i = start; i < ns.length; i++) {
      if(i > start && ns[i] === ns[i-1]){
        continue;
      }
      let n = ns[i];
      track.push(n);
      used[i] = true;
      backtrack(ns, track, used, i+1);
      track.pop();
      used[i] = false;
    }
  };

  backtrack(nums, [], [], 0);

  return res;
};
