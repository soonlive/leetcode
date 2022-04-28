/**
 * Created by Xin on 2022/4/28.
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
var maxPathSum = function(root) {
  if(!root) return root;

  let maxSum = root.val;

  let dfs = function(p){
    if(!p) return 0;

    dfs(p.left);
    dfs(p.right);

    let sum = p.val;
    let lSum = p.val;
    let rSum = p.val;

    if(p.left){
      sum += p.left.val;
      lSum += p.left.val;
    }

    if(p.right){
      sum += p.right.val;
      rSum += p.right.val;
    }


    maxSum = Math.max(p.val, sum, maxSum, lSum, rSum);

    p.val = Math.max(p.val, lSum, rSum);
  }

  dfs(root)


  return root.val > maxSum ? root.val:maxSum;
};
