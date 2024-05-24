var searchRange = function (nums, target) {
  const n = nums.length;
  const rs = [-1, -1];

  let start = 0;
  let end = n - 1;
  for (let i = 0; i < n; i++) {
    let mid = Math.floor((start + end) / 2);
    let midVal = nums[mid];
    if (midVal === target) {
      tmp = mid;
      while (tmp - 1 >= 0 && nums[tmp - 1] === target) {
        tmp--;
      }
      rs[0] = tmp;

      tmp = mid;
      while (tmp + 1 < n && nums[tmp + 1] === target) {
        tmp++;
      }
      rs[1] = tmp;

      return rs;

    } else if (midVal < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return rs;
};