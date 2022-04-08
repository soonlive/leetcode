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
var minDepth = function(root) {
  if(null === root) return 0;

  let lHeight = minDepth(root.left);
  let rHeight = minDepth(root.right);

  lHeight = lHeight || rHeight;
  rHeight = rHeight || lHeight;

  return Math.min(lHeight, rHeight) + 1;
};
