/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  if (nums.length === 1) return true
  let cover = 0
  for(i=0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i)
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
};
// @lc code=end

