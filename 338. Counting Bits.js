/**
 * Created by Xin on 2022/5/6.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let dp = [0];
  for(let i =1;i<n+1;++i){
    dp[i] = dp[i&(i-1)]+1;
  }
  return dp;
};
