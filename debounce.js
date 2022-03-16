/**
 * Created by Xin on 2022/2/27.
 */

function debounce(fn, wait){
  let timer;
  let debounced =  function (){
    let context = this;
    let args = arguments;

    if(timer){
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait)
  };

  debounced.cancel = () => {
    clearTimeout(timer);
  }

  return debounced;
}

function foo(args){
  console.log('debounce.js => 111', args);
}


// setInterval(function(){
let debounced = debounce(foo, 3000);
debounced(111);
debounced(222);
debounced(333);
debounced(444);

// },3000)
