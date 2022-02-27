/**
 * Created by Xin on 2022/2/27.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let common = strs[0].split('');


  for(let i = 1; i < strs.length; ++i){
    let current = strs[i];
    let temp = [];
    for (let j = 0; j < common.length; ++j) {
      if(current.charAt(j) === common[j]){
        temp.push(common[j]);
      }else{
        break;
      }
    }

    common = temp;
  }

  return common.join('');
};

module.exports = longestCommonPrefix;
