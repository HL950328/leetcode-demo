/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let p1 = m - 1
  let p2 = n- 1
  let p = m + n - 1
  while(p1>=0 && p2>=0) {
    nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--]: nums1[p1--]
  }
  while(p2 >= 0){
    nums1[p--] = nums2[p2--]
  }
  const len = nums1.length
  const result = len % 2 === 1 ? nums1[(len-1)/2] : (nums1[len/2] + nums1[len/2 -1])/2
  return result
};
// @lc code=end

