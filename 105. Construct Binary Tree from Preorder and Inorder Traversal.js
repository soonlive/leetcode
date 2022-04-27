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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length < 1 || inorder.length < 1){return null};

  let val = preorder.shift();
  let root = new TreeNode(val);
  let idx = inorder.findIndex(v=>v===val);
  root.left = idx === undefined?null: buildTree(preorder, inorder.slice(0, idx));
  root.right = idx === undefined?null:buildTree(preorder, inorder.slice(idx+1));

  return root;
};
