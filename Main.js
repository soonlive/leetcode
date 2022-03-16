/**
 * Created by Xin on 01/03/2017.
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function (obstacleGrid) {

  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;
  let arr = new Array(n).fill(0).map(() => new Array(m).fill(0));


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      debugger
      if (i === 0 || j === 0) {
        arr[i][j] = obstacleGrid[i][j] === 1 ? 0 : 1;
      } else {
        if (obstacleGrid[i][j] === 0) {
          arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        } else {
          arr[i][j] = 0;
        }
      }
    }
  }

  return arr[n - 1][m - 1];

  // for (let i = 0; i < obstacleGrid.length; i++) {
  //   for (let j = 0; j < obstacleGrid[i].length; j++) {
  //     if (i === 0 && j === 0 && obstacleGrid[i][j] === 0) {
  //       obstacleGrid[i][j] = 1;
  //     } else if (obstacleGrid[i][j] === 1) {
  //       obstacleGrid[i][j] = 0;
  //     } else {
  //       if (i === 0 && j > 0) {
  //         obstacleGrid[i][j] = obstacleGrid[i][j - 1];
  //       } else if (j === 0 && i > 0) {
  //         obstacleGrid[i][j] = obstacleGrid[i - 1][j];
  //       } else {
  //         obstacleGrid[i][j] = obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j];
  //       }
  //     }
  //   }
  // }
  // return obstacleGrid[obstacleGrid.length-1][obstacleGrid[obstacleGrid.length-1].length-1];
};
// module.exports = uniquePathsWithObstacles;


uniquePathsWithObstacles([[1,0]])

// uniquePathsWithObstacles([
//   [0, 0, 1],
//   [0, 1, 0],
//   [0, 0, 0]
// ])
