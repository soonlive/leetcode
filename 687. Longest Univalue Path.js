/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  var res = [0];

  if(root){
    dfs(root,res);
  }
  return res[0];
};



function dfs(treeNode,res) {
  var l = treeNode.left ? dfs(treeNode.left,res): 0;
  var r = treeNode.right ? dfs(treeNode.right,res): 0;

  var resl = treeNode.left  && treeNode.left.val === treeNode.val? l+1:0;
  var resr = treeNode.right  && treeNode.right.val === treeNode.val? r+1:0;

  res[0] = Math.max(res,resl+resr);
  return Math.max(resl,resr);
}

