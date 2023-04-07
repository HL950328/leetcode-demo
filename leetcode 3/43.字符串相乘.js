/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1==='0'||num2==='0') {
    return '0'
  }
  let l1 = num1.length,
  l2 = num2.length;

  let result = [];

  for (let i = l1 -1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
        let index1 = i + j;
        let index2 = i + j + 1;

        let product = num1[i] * num2[j] + (result[index2] || 0);
        result[index2] = product % 10;
        result[index1] = Math.floor(product / 10) + (result[index1] || 0);
    }
  }
  return result.join('').replace(/^0+/, '')

};
// @lc code=end

