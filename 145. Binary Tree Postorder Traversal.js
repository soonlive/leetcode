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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let res = []

  let traverse = function(p){
    if(null === p) return [];

    traverse(p.left);
    traverse(p.right);
    res.push(p.val);

  };

  traverse(root);

  return res;
};
