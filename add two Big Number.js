/**
 * Created by Xin on 2022/3/16.
 */
/**
 * 1、大数相加
 *
 * 限制：不可用BigInt
 *
 * 例如：
 * 输入
 * a = '11111111111111111111'
 * b = '22222222222222222222'
 * 返回
 * '33333333333333333333'
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addTwoBigNumber(a, b) {

  let nums1 = a.split('');
  let nums2 = b.split('');
  let res = [];
  let nums = nums1.length > nums2.length ? nums1 : nums2;

  for (let i = nums.length; i > 0; i--) {
    let n = Number(nums1.pop()) || 0;
    let m = Number(nums2.pop()) || 0;
    let sum = n + m;
    let delta = sum - 10;
    if (delta >= 0) {
      res[i] = res[i] + delta;
      res[i + 1] = 1;
    } else {
      res[i] = sum;
    }
  }

  return res.join('');
}

module.exports = addTwoBigNumber;
