/**
 * Created by Xin on 2022/4/29.
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let m = preorder.replaceAll(/\d+,#,#/ig,'#')
  if(m === '#') return true;
  if(m === preorder) return false;
  return isValidSerialization(m);
};
