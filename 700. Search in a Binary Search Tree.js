/**
 * Created by Xin on 2022/4/14.
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if(null === root) return null;

  if(root.val === val){
    return root;
  }

  let lf = searchBST(root.left, val);
  let rt = searchBST(root.right, val);

  return lf || rt || null;
};
