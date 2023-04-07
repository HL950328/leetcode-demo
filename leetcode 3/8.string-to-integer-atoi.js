/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = (str)=> {
  let res = str.trim().match(/^(\-|\+)?\d+/g)
  return res ? Math.max(Math.min(Number(res[0]),2**31-1),-(2**31)) : 0
};
// @lc code=end

