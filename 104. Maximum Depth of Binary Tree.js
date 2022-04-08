/**
 * Created by Xin on 2022/4/8.
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
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0;

  let lHeight = maxDepth(root.left);
  let rHeight = maxDepth(root.right);

  return Math.max(lHeight, rHeight) + 1;
};
