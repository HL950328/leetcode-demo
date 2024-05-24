var permuteUnique = function(nums) {
  let len = nums.length, result = []
  const visited = new Array(len).fill(false);
  const dfs = (depth, path) => {
      // 遍历到叶子结点了，可以返回了
      if(depth === len) {
        result.push(path.slice());
      }

      for(let i = 0; i < len; i++) {
          if (nums[i] == nums[i - 1] && visited[i - 1]) continue;
          if (visited[i]) continue
          // 如果没遍历过
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

  dfs(0, []);
  return result;
};

permuteUnique([0,3,3,3])