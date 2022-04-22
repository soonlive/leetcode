/**
 * Created by Xin on 2022/4/22.
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
var isValidBST = function(root) {

  let traverse = function(p, min, max){
    if(null === p) return true;

    let isValid = p.val > min && p.val < max;

    let lf = traverse(p.left, min, p.val);
    let rt = traverse(p.right, p.val, max);

    return isValid && lf && rt;
  }

  return traverse(root, -Infinity, Infinity);
};
