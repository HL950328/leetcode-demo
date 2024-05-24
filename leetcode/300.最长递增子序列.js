var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    // 遍历i前面的所有元素，将i与i前面的元素比较
    for (let j = 0; j < i; j++) {
      // 找比i小的元素，若有则让该元素的最长子序列长度加1，然后dp[i]取两者中较大的一个
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log('dp', dp)
  // 找出最大的子序列
  return Math.max(...dp);
};