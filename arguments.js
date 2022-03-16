/**
 * Created by Xin on 2022/3/8.
 */

function foo(){
  console.log('arguments.js => arguments', arguments)
  arguments.forEach((a) => {
    console.log('arguments.js => a', a)

  })

}



foo(1,2,3,4,5);
