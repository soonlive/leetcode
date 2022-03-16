/**
 * Created by Xin on 2018/8/28.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */



function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
  var res = [];
  if (N === 1) {
    res.push(new TreeNode(0));
    return res;
  }

  N = N - 1;

  for (let i = 0; i < N; i += 2) {
   var left = allPossibleFBT(N);
   var right = allPossibleFBT(N-i);

    left.forEach((nl) => {
      right.forEach((nr) => {
        var node = new TreeNode(0);
        node.left = nl;
        node.right = nr;
        res.push(node);
      });
    });

  }

  return res;
};

var result = allPossibleFBT(7);
console.log('894. All Possible Full Binary Trees.js => result', result)

