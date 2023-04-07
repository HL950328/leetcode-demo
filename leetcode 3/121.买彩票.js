/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
 function maxProfit(arr) {
  let min = arr[0], difMax = 0;
  for(let i = 1; i < arr.length; i++){
      difMax = Math.max(difMax, arr[i] - min);
      min = Math.min(min,arr[i]);
  }
  return difMax;
};
// @lc code=end

