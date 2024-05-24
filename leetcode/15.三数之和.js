/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len =  nums.length
  let res = []
  nums = nums.sort((a, b) => a - b)
  if(len < 3) return []
  // i遍历到len - 2即可，因为k指针指向len - 1这个元素，相当于nums[len - 1]作为固定值被遍历了一遍
  for(let i = 0; i < len - 2; i++) {
    let j = i + 1, k = len - 1
    // 如果当前固定的数与前一个相等，则说明已经寻找过这种情况了不需要再找一遍
    if(i > 0 && nums[i] === nums[i - 1]) continue
    while(j < k) {
      // 若nums[j] + nums[k] > diff,说明nums[k]大了，需小一点
      if(nums[i] + nums[j] + nums[k] > 0) {
        k--
        // 若k--之后的值与之前相等则继续递减
        while(j < k && nums[k] === nums[k + 1]) k--
      }
      else if(nums[i] + nums[j] + nums[k] < 0) {
        j++
        // 若k--之后的值与之前相等则继续递增
        while(j < k && nums[j] === nums[j - 1]) j++
      }
      else{
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--
        //  同理
        while(j < k && nums[k] === nums[k + 1]) k--
        while(j < k && nums[j] === nums[j - 1]) j++
      }
    }
  }
  return res
};
// @lc code=end

