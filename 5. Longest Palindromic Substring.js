/**
 * Created by Xin on 2022/5/18.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s.length < 2) return s;

  let helper = function (str, l, r) {

    let res = '';

    if (str[l] === str[r]) {
      res = str.substring(l, r + 1);
    }

    while (l >= 0 && r < str.length && str[l] === str[r]) {
      res = str.substring(l, r + 1);
      --l;
      ++r;
    }


    return res;
  }

  let res = '';
  for (let i = 0; i < s.length; ++i) {
    let c1 = helper(s, i, i);
    let c2 = helper(s, i, i + 1);

    if (c1.length > res.length) {
      res = c1;
    }

    if (c2.length > res.length) {
      res = c2;
    }

  }
  return res;
};
