/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 迭代
var subsets = function (nums) {
    const res = [[]];

    for (let i = 0; i < nums.length; i++) {
        const t = [];
        for (let j = 0; j < res.length; j++) {
        t.push([...res[j], nums[i]]);
        }

        res.push(...t);
    }

    return res;
};

//回溯
var subsets = function(nums) {
    let result = []
    let path = []
    function backtracking(startIndex) {
        result.push(path.slice())
        for(let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
};

subsets([1,2,3])
// @lc code=end

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