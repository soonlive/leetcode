/**
 * Created by Xin on 01/03/2017.
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (i === 0 && j === 0 && obstacleGrid[i][j] === 0) {
        obstacleGrid[i][j] = 1;
      } else if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        if (i === 0 && j > 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1];
        } else if (j === 0 && i > 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j];
        } else {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j];
        }
      }
    }
  }
  return obstacleGrid[obstacleGrid.length-1][obstacleGrid[obstacleGrid.length-1].length-1];
};
module.exports = uniquePathsWithObstacles;