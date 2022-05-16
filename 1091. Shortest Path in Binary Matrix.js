/**
 * Created by Xin on 2022/5/16.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  let n = grid.length;
  let m = grid[0].length;
  let dir = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  let queue = [];
  let visited = Array(n).fill().map(() => Array(m));
  let path = Array(n).fill().map(() => Array(m));
  path[n - 1][m - 1] = -1;
  queue.push([0, 0]);
  path[0][0] = 1;
  visited[0][0] = true;

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; ++i) {
      let cur = queue.shift();
      let x = cur[0];
      let y = cur[1];

      for (let j = 0; j < dir.length; ++j) {
        let nextX = x + dir[j][0];
        let nextY = y + dir[j][1];
        let isValidPos = nextX >= 0 && nextX < n && nextY >= 0 && nextY < m;
        if (isValidPos && grid[nextX][nextY] === 0 && !visited[nextX][nextY]) {
          path[nextX][nextY] = path[x][y] + 1;
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY]);
        }
      }
    }
  }

  return path[n - 1][m - 1];
};
