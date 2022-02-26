/**
 * Created by Xin on 2022/2/26.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let m = {
    '(': 1,
    '{': 2,
    '[': 3,
    ')': -1,
    '}': -2,
    ']': -3,
  };
  let stack = [];

  for(let i=0;i<s.length;++i){
    let a = s.charAt(i);

    if(m[a]>0){
      stack.push(m[a]);
    }else {
      let v = m[a] + stack.pop();
      if(v!==0){
        return false
      }
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
