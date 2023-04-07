/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let ans = ""
  for(const ch of strs[0]){
      if(!strs.every(str => str.startsWith(ans+ch))){
        break
    }
    ans += ch
  }
  return ans
};
// @lc code=end

