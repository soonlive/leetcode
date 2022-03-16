/**
 * Created by Xin on 2022/2/28.
 */

function foo1(arr) {
  // arr = [1]
  arr.push(1);
  foo2(arr);
}


function foo2(arr) {
  arr.push(2);
  // arr = [2]
}


function fooa(obj) {
  obj.name = 'a';
  foob(obj);
}


function foob(obj) {
  obj.name = 'b';
}

let obj = {
  name: '0'
}

let arr = [0];

foo1(arr)

fooa(obj)


setTimeout(function () {
  console.log('demo.js => arr', arr)
  console.log('demo.js => obj.name', obj.name)


}, 3000)
