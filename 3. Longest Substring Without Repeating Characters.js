/**
 * Created by Xin on 2022/5/7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0;

  let max = '';
  let temp = s.at(0);
  for(let i =1;i<s.length;++i){
    let idx = temp.indexOf(s[i]);
    if(idx > -1){
      max = max.length > temp.length?max:temp;
      temp = temp.substring(idx+1)+s[i];
    }else{
      temp += s[i];
    }
  }

  max = max.length > temp.length?max:temp;

  return max.length;
};
