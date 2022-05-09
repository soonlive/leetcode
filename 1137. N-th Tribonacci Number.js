/**
 * Created by Xin on 2022/5/9.
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n===0) return n;
  if(n<3) return 1;
  let p1 = 0;
  let p2 = 1;
  let p3 = 1;

  for(let i=3;i<=n;++i){
    p3 = p1+p2+p3;
    p2 = p3 - p2 - p1;
    p1 = p3 - p2 - p1;
  }

  return p3;
};
