/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if(!s) return true;
  if(!t) return false;


  let dp = [];
  for(let i =0;i<s.length;++i){
    dp[i] = [s.at(i) === t.at(0)];
  }

  for(let j =0;j<t.length;++j){
    dp[0][j] = s.at(0) === t.at(j) || dp[0][j-1];
  }

  for(let i=1;i<s.length;++i){
    for(let j=1;j<t.length;++j){
      dp[i][j] = !!(dp[i - 1][j] && dp[i - 1][j - 1] && (s.at(i) === t.at(j) || dp[i][j - 1]));
    }
  }
  return dp[s.length-1][t.length-1] === true;
};
