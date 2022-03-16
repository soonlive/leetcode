/**
 * f(i) = max(f(i-1,C), v[i]+f(i-1, C-w[i])
 * @param w
 * @param v
 * @constructor
 */

let KnapSack01 = function (w, v, c) {
  const size = w.length;
  let dp = [];

  for (let i = 0; i < size; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }

  for (let i = 0; i < c; i++) {
    dp[0][i] = 0;
  }


  for (let i = 1; i < size; ++i) {
    for (let j = 1; j <= c; j++) {
      if (j - w[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], v[j - 1] + dp[i - 1][c - w[i - 1]]);
      }
    }
  }

  return dp[size - 1][c];
}


let w = [2, 1, 3, 2];
let v = [12, 10, 20, 15];

const result = KnapSack01(w, v, 5);
console.log('KnapSack01.ts => result', result)

