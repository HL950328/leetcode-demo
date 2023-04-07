/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let L =  0;
  let R = height.length - 1;
  let res = 0;
  while(L<R) {
      let sum =  Math.min(height[L], height[R]) * (R - L)
      res = Math.max(res, sum)
      height[L] > height[R] ? R-- : L++
  }
  return res
};
// @lc code=end

