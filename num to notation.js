/**
 * Created by Xin on 2022/5/26.
 */

function numToNotation(n, step){
  let map = [];
  let lastCode = 65 + step;
  for (let i = 65; i < lastCode; i++) {
    map.push(String.fromCharCode(i));
  }

  function foo(n) {
    if (n <= step) {
      return map[n - 1];
    }

    let cur = n % step;
    n = Math.floor(n / step);

    return foo(n) + map[cur - 1];
  }

  return foo(n)
}

console.log('notation.js => ', numToNotation(703, 26))


