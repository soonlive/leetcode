/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let p1 = cost[0];
  let p2 = cost[1];
  let temp;
  for(let i = 2;i<cost.length;++i){
    temp = p2;
    p2 = Math.min(p1, p2) + cost[i];
    p1 = temp;
  }

  return Math.min(p1, p2);
};


module.exports = minCostClimbingStairs;
