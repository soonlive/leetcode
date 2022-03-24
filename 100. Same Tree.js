/**
 * Created by Xin on 2022/3/24.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if( p === null || q === null) return p === q;

  let isSameRoot =  p.val === q.val;
  if(!isSameRoot) return false;

  let isSameLeft = isSameTree(p.left, q.left);
  let isSameRight = isSameTree(p.right, q.right);
  return isSameLeft && isSameRight;
};

