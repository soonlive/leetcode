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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

  let res = []

  let dfs = function(p, path){
    if(!p) return;
    path = path ?path+'->'+p.val:p.val+'';

    if(null === p.left && null === p.right){
      res.push(path);
      return;
    }
    dfs(p.left, path);
    dfs(p.right, path);
  };

  dfs(root, '');

  return res;
};
