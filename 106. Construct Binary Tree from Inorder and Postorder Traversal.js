/**
 * Created by Xin on 2022/4/27.
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(inorder.length < 1||postorder.length<1) return null;

  let val = postorder.pop();
  let root =new TreeNode(val);
  let idx = inorder.findIndex(v=>v===val);
  if(undefined !== idx){
    let lf = inorder.slice(0, idx);
    let rt = inorder.slice(idx+1);
    root.left = buildTree( lf, postorder.slice(0,lf.length));
    root.right = buildTree( rt, postorder.splice(-rt.length));
  }
  return root;
};
