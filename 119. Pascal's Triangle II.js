/**
 * Created by Xin on 2022/5/9.
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(0 === rowIndex) return [1];
  if(1 === rowIndex) return [1,1];

  let p1 = [1,1];
  for(let i = 1;i<rowIndex;++i){
    let pre = p1[i];
    for(let j = 1;j<=i;++j){
      p1[j] = pre + p1[j];
      pre = p1[j] - pre;
    }
    p1.push(1);
  }

  return p1;
};

