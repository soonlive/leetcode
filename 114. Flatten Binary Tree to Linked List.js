/**
 * Created by Xin on 2022/4/21.
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(null === root) return root;

  let lf = root.left;
  let rt = root.right;

  root.left = null;
  root.right = lf;

  flatten(lf);

  let p = root;
  while(p.right !== null){
    p = p.right;
  }

  p.right = rt;
  flatten(rt);

};
