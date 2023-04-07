var maxProduct = function(nums) {
  let min = max = res = nums[0];
  for (let i = 1; i < nums.length; i++) {
      // const mx = max, mn = min
      max = Math.max(max * nums[i], nums[i], min * nums[i]);
      min = Math.min(min * nums[i], nums[i], max * nums[i]);
      res = Math.max(max, res);
  }
  return res;
};

var maxProduct = function(nums) {
  let min = max = res = nums[0];
  for (let i = 1; i < nums.length; i++) {
      const mx = max, mn = min
      max = Math.max(mx * nums[i], nums[i], mn * nums[i]);
      min = Math.min(mn * nums[i], nums[i], mx * nums[i]);
      res = Math.max(max, res);
  }
  return res;
};

var maxProduct = function(nums) {
  let min = max = res = nums[0];
  for (let i = 1; i < nums.length; i++) {
      const mx = max, mn = min
      max = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
      min = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
      res = Math.max(max, res);
  }
  return res;
};
maxProduct([-4, -3, -2])
