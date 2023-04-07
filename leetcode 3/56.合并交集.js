/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  const n = intervals.length;

  if (n <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let refs = [];
  refs.unshift([intervals[0][0], intervals[0][1]]);

  for (let i = 1; i < n; i++) {
    let ref = refs[0];

    if (intervals[i][0] <= ref[1]) {
      ref[1] = Math.max(ref[1], intervals[i][1]);
    } else {
      refs.unshift([intervals[i][0], intervals[i][1]]);
    }
  }

  return refs;
};
// @lc code=end

// 正向
var merge = function(intervals) {
  const n = intervals.length;
  if (n <= 1) {
      return intervals
  }
  intervals.sort((a,b) => a[0] - b[0])
  const refs = []
  refs.push(intervals[0])  
  for (i=1; i<n; i++) {
    let ref = refs[refs.length-1]
    if (ref[1] >= intervals[i][0]) {
        ref[1] = Math.max(ref[1], intervals[i][1])
    }else{
        refs.push(intervals[i])
    }
  }
  return refs
};

