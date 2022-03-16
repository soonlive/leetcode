/**
 * Created by Xin on 2020/4/30.
 */

/**
 * dp[i]=min(dp(i-1),dp(i-1)+cost[i])
 * @param {number[]} cost
 * @return {number}
 */

var loop_size = function(cost) {
  var loopArr = [];
  while (node && loopArr.indexOf(node) < 0) {
    loopArr.push(node);
    node = node.next;
  }
  var firstIndex = Math.max(0, loopArr.indexOf(node));
  return loopArr.length - firstIndex;
};



function initNodes(){

}

module.exports = loop_size;
