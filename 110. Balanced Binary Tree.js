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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(!root) return true;

  let traverse = function(p){
    if(!p) return 0;

    let lHeight = traverse(p.left);
    let rHeight = traverse(p.right);

    return Math.max(lHeight, rHeight) + 1;
  }

  if(Math.abs(traverse(root.left) - traverse(root.right)) > 1){
    return false;
  }

  let isBalancedLeft = isBalanced(root.left);
  let isBalanceRight = isBalanced(root.right);

  return isBalancedLeft && isBalanceRight;
};
