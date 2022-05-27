/**
 * Created by Xin on 2022/5/27.
 */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {

  let foo = function(n, step){
    if(n === 0){
      return step
    }

    ++step;
    return n%2 === 0? foo(n/2, step):foo(n-1, step);

  }

  return foo(num, 0)
};
