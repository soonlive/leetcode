/**
 * Created by Xin on 2022/3/1.
 */

function chunk(arr, length) {
  // writer your code here
  let res = [];
  while(arr.length > 0){
    let temp = [];
    for(let i =0;i<length;++i){
      temp.push(arr.shift());
      if(arr.length < 1){
        break;
      }
    }
    res.push(temp);
  }
  console.log('a.js => JSON.stringify(res)', JSON.stringify(res))

  return res;
}


// const prices = [7,1,5,3,6,4]
const prices = [17,10,20,3,6,4];

function maxProfit(prices) {
  // Write you code here
  let buy = prices[0];
  let sell = prices[1];
  let max = sell - buy;

  for(let i = 2; i<prices.length-1;++i){
    let min = Math.min(buy, sell);
    let current = prices[i];
    if(current-min>max){
      buy = min;
      sell = current;
      max = current-min;
    }
  }
  return max;
}

maxProfit(prices);


// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1))
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2))
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3))
// var a =1;
// console.log(chunk(['a', 'b', 'c', 'd'], 2))
// // => [['a', 'b'], ['c', 'd']]
//
// console.log(chunk(['a', 'b', 'c', 'd'], 3))
// // => [['a', 'b', 'c'], ['d']]
