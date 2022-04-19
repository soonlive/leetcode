/**
 * Created by Xin on 2022/4/19.
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if(null === root) return [];

  let res = [];

  let traverse = function(p, target, pre){
    if(null === p) return null;

    let delta = target - p.val;
    if(null === p.left && null === p.right){
      if(0 === delta){
        res.push(pre.concat(p.val));
        return p.val;
      }
      return null;
    }

    traverse(p.left, delta, pre.concat(p.val));
    traverse(p.right, delta, pre.concat(p.val));
  }

  traverse(root, targetSum, []);

  return res;
};
