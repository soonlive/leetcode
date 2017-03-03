/**
 * Created by Xin on 02/03/2017.
 */
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let health = new Array(dungeon.length).fill().map(() => {
    return new Array(dungeon[0].length);
  });


  let m = dungeon.length - 1;
  let n = dungeon[0].length - 1;
  for (let i = m; i > -1; --i) {
    for (let j = n; j > -1; --j) {
      if (i === m && j === n) {
        health[i][j] = Math.max(1, 1 - dungeon[i][j]);
      } else if (i === m && j !== n) {
        health[i][j] = Math.max(1, health[i][j + 1] - dungeon[i][j]);
      } else if (j === n && i !== m) {
        health[i][j] = Math.max(1, health[i + 1][j] - dungeon[i][j]);
      } else {
        health[i][j] = Math.max(1, Math.min(health[i + 1][j], health[i][j + 1]) - dungeon[i][j]);
      }
    }
  }


  return health[0][0];
};

module.exports = calculateMinimumHP;