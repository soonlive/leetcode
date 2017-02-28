/**
 * Created by Xin on 28/02/2017.
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {

      if (i === 0 || j === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
      }
    }
  }

  return arr[m - 1][n - 1];

};

module.exports = uniquePaths;