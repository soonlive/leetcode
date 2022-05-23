/**
 * Created by Xin on 2022/5/23.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  let nums = Array(n).fill().map((v,idx)=>idx+1);
  let res = [];
  let backtrack = function (ns, track, start, size){
    if(track.length === size ) {
      res.push([...track]);
      return;
    }


    for (let i = start; i < ns.length; i++) {
      let n1 = ns[i];

      track.push(n1);
      backtrack(ns, track, i+1, size);
      track.pop();
    }
  }

  backtrack(nums,[], 0, k)


  return res;
};
