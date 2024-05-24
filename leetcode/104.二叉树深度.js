/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function (root) { // 层序遍历
  if (root == null) return 0;
  const queue = [];
  let deep = 0;
  queue.push(root);
  while (queue.length) {
    deep++;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
        const node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
  }
  return deep;
};
// @lc code=end

var maxDepth = function (root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};