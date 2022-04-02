/**
 * Created by Xin on 2022/4/2.
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
var isSymmetric = function(root) {

  let traverse = function(left, right){
    if(left === null || right === null) return left === right;

    let isSameRootVal = left.val === right.val

    if(!isSameRootVal) return false;

    let isSameOut = traverse(left.left, right.right);
    let isSameInner = traverse(left.right, right.left);

    return isSameOut && isSameInner;
  }

  return traverse(root.left, root.right);
};
