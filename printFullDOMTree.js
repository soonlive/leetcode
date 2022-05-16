/**
 * Created by Xin on 2022/5/13.
 */

/**
 * this' a interview question of M*, print dom structure
 * @param $current
 * @param idx
 */
let printFullDOMTree = function ($current, idx = 0) {
  console.log('  '.repeat(idx) + '<' + $current.tagName + '>');

  let children = Array.from($current.children);
  while (children.length > 0) {
    let $item = children.shift();
    printFullDOMTree($item, idx + 1);
  }

  console.log('  '.repeat(idx) + '</' + $current.tagName + '>');
}
