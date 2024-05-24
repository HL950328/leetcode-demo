var canPartition = function(nums) {
  let len = nums.length;
  let sum = 0;
  for(let i = 0 ; i <len ; i++){
    sum+=nums[i];
  }
  if(sum%2!=0){
    return false;
  }
  let target = sum/2;
  let dp = Array.from({ length: len }, () => new Array(target+1).fill(false));
  // for (let i = 0; i < len; i++) {
  //   dp[i][0] = true;
  // }
  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  console.log('dp', dp)
  return dp[len - 1][target];
}
canPartition([2,1,1])