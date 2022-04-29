/**
 * Created by Xin on 2022/4/29.
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
var countNodes = function(root) {
  if(!root) return 0;

  let count = 0;
  let queue = [root];

  while(queue.length > 0){
    let size = queue.length;
    for(let i =0;i<size;++i){
      let node = queue.shift();
      ++count;
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  return count;
};
