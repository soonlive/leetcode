/**
 * Created by Xin on 2022/4/15.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

  let traverse = function(n, start, end){
    if(start > end) return null;

    let mid = Math.ceil((end + start) / 2);

    let root = new TreeNode(n[mid]);

    root.left = traverse(n, start, mid - 1);
    root.right = traverse(n, mid + 1, end);
    return root;
  };

  return traverse(nums, 0, nums.length - 1);
};
