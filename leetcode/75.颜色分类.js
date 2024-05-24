var sortColors = function(nums) {
  let index = 0, n = nums.length;
  for(let i = 0; i < n; i++){
    if(nums[i] === 0) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }
  for(let i = index; i < n; i++){
    if(nums[i] === 1) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }
  return nums;
};