/**
 * Created by Xin on 2022/4/19.
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(null === root) return false;

  let delta = targetSum - root.val;
  if(0 === delta && null === root.left && null === root.right) return true;

  let lf =  hasPathSum(root.left, delta);
  let rt = hasPathSum(root.right, delta);

  return lf || rt;
};
