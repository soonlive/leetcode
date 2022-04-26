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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let pre,t1,t2;
  let traverse = function(p){
    if(!p) return;
    traverse(p.left);
    if(pre && pre.val > p.val){
      if(!t1) t1 = pre;
      t2 = p;
    }
    pre = p;
    traverse(p.right);
  }

  traverse(root);
  [t1.val,t2.val] = [t2.val,t1.val];
};
