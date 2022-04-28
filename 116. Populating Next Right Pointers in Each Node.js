/**
 * Created by Xin on 2022/4/28.
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return root;


  let res = [];

  let queue = [root];
  let level = 0

  while(queue.length > 0){
    if(!res[level]) res[level] = [];
    let p = queue.shift();
    let count = Math.pow(2, level+1) - 1 + (level+1);
    let levelCount = count - (Math.pow(2, level-1+1) - 1 + (level-1+1));

    if(res[level].length < levelCount){
      if(res[level].at(-1)) {res[level].at(-1).next = p;}
      res[level].push(p);
    }

    if(res[level].length === (levelCount-1)){
      res[level].push(p.next);
      ++level;
    }

    if(p.left) queue.push(p.left);
    if(p.right) queue.push(p.right);
  }

  return root;
};
