/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

//递归解法
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
  let memo = {};
  const dfs = (n) => {
    // base case
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (memo[n]) return memo[n];
    memo[n] = dfs(n - 1) + dfs(n - 2);
    return memo[n];
  };
  return dfs(n);
};

list.reduce((prev, curry, index) => {
  
})