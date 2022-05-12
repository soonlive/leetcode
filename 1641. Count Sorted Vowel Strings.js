/**
 * Created by Xin on 2022/5/11.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  // dp get all strings
  // let vowels = ['a', 'e', 'i', 'o', 'u'];
  // let pre = vowels;
  // let cur = vowels;
  //
  // for (let i = 2; i <= n; ++i) {
  //   cur = [];
  //   for(let j =0;j<vowels.length;++j){
  //     let c = vowels[j];
  //     let start = pre.indexOf(c.repeat(i-1));
  //     pre.forEach((v,idx) => {
  //       if(idx >= start){
  //         cur.push(c+v);
  //       }
  //     })
  //   }
  //   pre = cur;
  // }
  //
  // return cur.length;

  // dp only count
  // let dp = [];
  //
  // for(let i =0;i<5;++i){
  //   dp[i] = [1];
  // }
  //
  // for(let j =0;j<=n;++j){
  //   dp[0][j] = 1;
  // }
  //
  // for(let i =1;i<5;++i){
  //   for(let j=1;j<=n;++j){
  //     dp[i][j] = 0;
  //     for(let k =i;k>=0;--k){
  //       dp[i][j] += dp[k][j-1];
  //     }
  //   }
  // }
  //
  // return dp[4][n];

  // dp simplified
  let res = [1,1,1,1,1];

  for(let i=0;i<n;++i){
    for(let j=1;j<5;++j){
      res[j] = res[j] + res[j-1];
    }
  }
  return res[4];
};
