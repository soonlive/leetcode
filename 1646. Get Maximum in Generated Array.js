/**
 * Created by Xin on 2022/5/10.
 */

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {

  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  let max = 0;
  for(let i =0;i<=n;++i){
    if(dp[i/2]){
      dp[i] = dp[i/2];
    }else{
      dp[i] = dp[Math.ceil(i/2)] + dp[Math.floor(i/2)];
    }
    if(dp[i] > max){
      max = dp[i];
    }
  }
  return max;
};
