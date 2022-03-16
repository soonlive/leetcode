/**
 * Created by Xin on 2022/3/16.
 */


/**
 * 2. 由文件依赖关系输出加载排序
 *
 * 输入
 * {
 *   'index.js': [ '1.js', '2.js' ],  // index.js 依赖 1.js、2.js
 *   '2.js': [ '1.js' ],              // 2.js 依赖 1.js
 * }
 * 返回
 * [ '1.js', '2.js', 'index.js' ]  // 合理的加载顺序
 *
 * @param {object} fileMaps
 * @return {string[]}
 */
function sortDeps(fileMaps) {
  let res = [];

  Object.keys(fileMaps).reduce((cur, pre)=>{
    let sq = fileMaps[cur].concat(cur);
  },[]);





}

sortDeps(
  {
    'index.js': [ '1.js', '2.js' ],  // index.js 依赖 1.js、2.js
    'b.js': ['index.js'],
    'c.js': ['1.js', '2.js', 'b.js'],
    '2.js': [ '1.js', 'c.js' ],              // 2.js 依赖 1.js
  }
)
