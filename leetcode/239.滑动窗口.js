const maxSlidingWindow = (nums, k) => {
  const queue = []; // 存放优先队列的元素下标，为了取值方便
  const result = []; // 结果数组

  for (let i = 0; i < nums.length; i++) {
    // 如果队列不为空，当前元素大于队列里的其他元素，则弹出
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    // 当前元素下标入栈
    queue.push(i);

    // 判断当前最大值是否在窗口中，若不在则让其出队
    while (queue[0] < i - k + 1) {
      queue.shift();
    }
    // 达到窗口大小时，就向结果添加数据
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  console.log("result", result);
  return result;
};
// nums = [1,3,-1,-3,5,3,6,7], k = 3
// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
maxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8], 3);
