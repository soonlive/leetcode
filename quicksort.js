/**
 * Created by Xin on 2022/2/28.
 */

function quicksort(arr) {

  if (arr.length < 1) {
    return [];
  }

  let target = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let cur = arr[i];
    if (cur < target) {
      left.push(cur);
    } else {
      right.push(cur);
    }
  }

  return quicksort(left).concat([target]).concat(quicksort(right));
}


let arr = [8, 3, 1, 2, 3, 4, 6, 7];
console.log('quicksort.js => quicksort(arr)', quicksort(arr))
