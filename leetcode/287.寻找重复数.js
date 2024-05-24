var findDuplicate = function (nums) {
  if (nums.length <= 2) return nums[0]
  let slow = 0, fast = 0
  while (true) {
    // slow指针走一步
    slow = nums[slow]
    // fast指针走两步
    fast = nums[nums[fast]]
    if (slow === fast) {
      fast = 0
      break
    }
  }

  while (true) {
    slow = nums[slow]
    fast = nums[fast]
    if (slow === fast) return slow
  }
};
findDuplicate([3,1,4,2,2])
