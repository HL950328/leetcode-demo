var singleNumber = function(nums,sum=0) {
  let len = nums.length;
  for(let i = 0 ; i <len ; i++){
      sum^=nums[i];
  }
  return sum;
};