/**
 * Created by Xin on 2022/4/29.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let target;

  let dfs = function(node, p, q){
    if(!node) return node;

    let lf = dfs(node.left, p, q);
    let rt = dfs(node.right, p, q);

    if( lf && rt){
      target = node;
      return null
    }

    let mid = (node.val === p.val || node.val === q.val) ? node : null;

    if((lf||rt)&&mid){
      target = node;
      return null;
    }

    return lf || rt || mid;
  }

  dfs(root,p,q)

  return target;
};
