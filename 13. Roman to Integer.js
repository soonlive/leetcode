/**
 * Created by Xin on 2022/2/26.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let mapping = {
    I: 1,
    V: 5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
    IV:4,
    IX:9,
    XL:40,
    XC:90,
    CD:400,
    CM:900
  };
  let sum = 0;

  for(let i = 0; i<s.length; ++i){
    let target = mapping[s.charAt(i)];
    if(mapping[s.charAt(i)+s.charAt(i+1)]){
      target = mapping[s.charAt(i)+s.charAt(i+1)]
      ++i;
    }
    sum = sum + target;
  }
  return sum;
};

module.exports = romanToInt;
