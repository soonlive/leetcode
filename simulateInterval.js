/**
 * Created by Xin on 2022/2/28.
 */

// let timer;

function simulateInterval(fn, wait){
  let timer;

  let step = () => {
    fn.call(null);
    timer = setTimeout(step, wait)
  };


  timer = setTimeout(step, wait)

  return timer
}

let tim = simulateInterval(() => {
  console.log('simulateInterval.js => 111', 111)

},1000)

console.log('simulateInterval.js => tim', tim)

setTimeout(() => {
  clearTimeout(tim);
  tim = null
  console.log('simulateInterval.js => clear')

},5000)
