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
 * @return {number}
 */
var sumNumbers = function(root) {

  let sum = 0;

  let traverse = function(p, pre){
    if(null === p)  return p;

    pre = pre.concat(p.val);
    if(null === p.left && null === p.right){
      let num = pre.join('');
      sum += Number(num);
    }

    traverse(p.left, pre);
    traverse(p.right, pre);
  }

  traverse(root, []);

  return sum;

};
