/**
 * Created by Xin on 2022/2/28.
 */


function throtlle(fn, wait){
  let timer;

  return function(){
    let context = this;
    let args = arguments;

    if(timer){
      return;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
      clearTimeout(timer);
    },wait);
  }
}

function foo(args){
  console.log('throtlled.js => 111', args);
}

let throtlled = throtlle(foo, 1000);
throtlled(111);
throtlled(222);
throtlled(333);
throtlled(444);
