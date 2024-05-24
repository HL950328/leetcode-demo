/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function getlonglestString(l,r,s) {
    while(l>=0 && r<s.length&&s[l]===s[r]) {
        l--;
        r++
    }
    return s.substring(l+1,r)
}
  
var longestPalindrome = function(s) {
    let result = ''
    for (i=0; i<s.length; i++) {
        let result1 = getlonglestString(i,i,s)
        let result2 = getlonglestString(i,i+1,s)
        result = result1.length > result.length ? result1: result
        result = result2.length > result.length ? result2: result
    }
    return result;
  } 
// @lc code=end

