/**
 * Created by Xin on 2022/5/9.
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n<1) return 0;

  let p1 = 1;
  let p2 = 1;
  for(let i =3;i<=n;++i){
    p1 = p1 + p2;
    p2 = p1 - p2;
  }

  return p1;
};

