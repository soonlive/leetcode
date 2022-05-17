/**
 * Created by Xin on 2022/5/17.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let pivot = m + n - 1;
  --m;
  --n;
  while (m >= 0 && n >= 0) {
    if (nums1[m] >= nums2[n]) {
      nums1[pivot] = nums1[m];
      --m;
    } else {
      nums1[pivot] = nums2[n];
      --n;
    }

    --pivot;
  }

  while (n >= 0) {
    nums1[pivot] = nums2[n];
    --pivot;
    --n;
  }
};
