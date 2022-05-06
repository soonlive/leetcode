/**
 * Created by Xin on 2022/5/6.
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
var diameterOfBinaryTree = function(root) {
  let max = 0;
  let dfs = function(p){
    if(!p) return 0;

    let lf = dfs(p.left);
    let rt = dfs(p.right);
    max = Math.max(max, lf + rt);
    return Math.max(lf,rt) + 1;
  }

  dfs(root);
  return max;
};
