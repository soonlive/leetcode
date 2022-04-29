/**
 * Created by Xin on 2022/4/29.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if(!root) return root;

  let res = [];

  let dfs = function(p){
    if(!p) return;

    dfs(p.left);
    res.push(p.val);
    dfs(p.right)
  }

  dfs(root);

  return res[k-1];
};


