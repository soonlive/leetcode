/**
 * Created by Xin on 2022/4/20.
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let count = 0;

  let traverse = function(p, pre){
    if(null === p) return null;

    let tempSum = 0;
    pre = pre.concat(p.val);

    for(let i = pre.length - 1; i >= 0; --i){
      tempSum += pre[i];
      if(tempSum === targetSum) {
        ++count;
      }
    }


    if(null === p.left && null === p.right) {
      return null;
    }

    traverse(p.left, pre);
    traverse(p.right, pre);

  }

  traverse(root, []);

  return count;
};
