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

