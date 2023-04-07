var rob = function(nums) {
  let n = nums.length
  let dp = [0, nums[0]]
  for(let i = 2; i <= n; i++){
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i-1])
  }
  return dp[n]
};

rob([1,2,3,4,5])