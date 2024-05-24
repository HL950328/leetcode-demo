var lengthOfLongestSubstring = function (str) {
  if (str.length <= 1) {
    return str.length;
  }
  let left = 0;
  let right = 1;
  let max = 0;
  let temp;
  while (right < str.length) {
    temp = str.slice(left, right);
    if (temp.indexOf(str.charAt(right)) > -1) {
      left++;
      continue;
    } else {
      right++;
    }
    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0; // 定义左指针
  let res = 0; // 结果
  let map = new Map(); // 存放字符和对应下标
  for (let r = 0; r < s.length; r++) {
    // 如果出现了重复字符，则把左指针移到重复字符的下一位。注意同时满足重复字符的索引大于左指针。
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1); // 计算结果
    map.set(s[r], r); // 存下每个字符的下标
  }
  return res;
};
