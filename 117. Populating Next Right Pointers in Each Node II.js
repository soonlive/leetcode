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

  let res = [];
  let queue = [root];

  let helper = function(p, level){
    if(!p) return;

    if(!res[level]) res.push([]);

    res[level].push(p);
    if(p.left) helper(p.left, level+1);
    if(p.right) helper(p.right, level+1);

    for(let i=0;i<res[level].length;++i){
      let last = res[level][i-1];
      if(last){
        last.next = res[level][i];
      }
    }
  }

  helper(root, 0);



  return root;
};
