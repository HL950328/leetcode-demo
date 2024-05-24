/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  const n = height.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  for (i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i - 1]);
  }
  for (i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i + 1]);
    short = Math.min(left[i], right[i]);
    if (short > height[i]) {
      ans += short - height[i];
    }
  }
  return ans;
};

// @lc code=end
