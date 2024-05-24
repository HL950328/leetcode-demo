var levelOrder = function (root) {
  // 临界值
  if (root == null) return [];
  // 定义队列
  const queue = [];
  // 返回值
  const res = [];
  queue.push(root);
  while (queue.length) {
      const node = queue.shift();
      // 左右节点不为空，入队继续遍历
      res.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
  }
  return res;
};