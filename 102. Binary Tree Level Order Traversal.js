/**
 * Created by Xin on 2022/4/26.
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [];
  let res = [];

  if(root){
    queue.push(root);
  }

  while(queue.length > 0){
    let size = queue.length;
    let vector = [];

    for(let i = 0; i < size; ++i){
      let cur = queue.shift();
      vector.push(cur.val)
      if(cur.left){
        queue.push(cur.left)
      }
      if(cur.right){
        queue.push(cur.right)
      }
    }
    res.push(vector);
  }

  return res;

};
