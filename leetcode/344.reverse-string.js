/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function (s) {
  let l = 0
  let r = s.length - 1
  let n = null
  while (l < r) {
    n = s[l]
    s[l] = s[r]
    s[r] = n
    l++
    r--
  }
};
// @lc code=end

