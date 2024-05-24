/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let len = nums.length,
    result = [];

  const visited = new Array(len).fill(false);

  const dfs = (nums, depth, path) => {
    // 遍历到叶子结点了，可以返回了
    if (depth === len) {
      result.push([...path]);
    }

    for (let i = 0; i < len; i++) {
      // 如果没遍历过
      if (!visited[i]) {
        // 压入 path 数组，然后是否遍历过的数组此下标处变为 true
        path.push(nums[i]);
        visited[i] = true;
        // 继续 dfs，直到最后一层
        dfs(nums, depth + 1, path);
        // 进行回溯，还原，以便下一次使用
        visited[i] = false;
        path.pop();
      }
    }
  };

  dfs(nums, 0, []);
  return result;
};
// @lc code=end
var permute = function (nums) {
  let len = nums.length,
    result = [];
  const visited = new Array(len).fill(false);

  const dfs = (depth, path) => {
    if (depth === len) {
      result.push(path.slice().join(""));
    }

    for (let i = 0; i < len; i++) {
      // 如果没遍历过
      if (!visited[i]) {
        // 压入 path 数组，然后是否遍历过的数组此下标处变为 true
        path.push(nums[i]);
        visited[i] = true;
        // 继续 dfs，直到最后一层
        dfs(depth + 1, path);
        // 进行回溯，还原，以便下一次使用
        visited[i] = false;
        path.pop();
      }
    }
  };

  dfs(0, []);
  return result;
};
