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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return [];

  let res = [];
  let queue = [root];
  let level = 0;
  while(queue.length > 0){
    if(!res[level]) res[level] = [];
    let size = queue.length;

    for(let i =0;i<size;++i){
      let cur = queue.shift();
      res[level].push(cur.val);
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
    }

    ++level;
  }

  let nums = res.reduce((pre, n)=>{
    if(undefined !== n.at(-1)){
      pre.push(n.at(-1));
    }
    return pre;
  }, []);

  return nums;
};
