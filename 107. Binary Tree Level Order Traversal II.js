/**
 * Created by Xin on 2022/4/27.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];

  let helper = function (p, idx) {
    if (!p) return;
    let target = res[res.length - idx];
    if (undefined === target) {
      let vect = [];
      vect.push(p.val);
      res.unshift(vect);
    } else {
      let vect = target;
      vect.push(p.val);
    }
    helper(p.left, idx + 1);

    helper(p.right, idx + 1);
  }

  helper(root, 1);
  return res;
};
