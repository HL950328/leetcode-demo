var combine = function(n, k) {
  let result = []
  const backtracking = (start, end, maxLen, node, result) => {
      //终止条件
      if(node.length === maxLen)	{
        result.push([...node])
        return
      }
      //集合的元素集，类似子节点的个数
      for (let i = start; i <= end; i++) {
        //处理结点
        node.push(i)
        //递归函数
        backtracking(i + 1, end, maxLen, node, result)
        // 回溯操作(回退处理结点[1, 2] 撤销2 ,[1, 3] 撤销3)
        node.pop()
      }
  }
  backtracking(1, n, k, [], result)
  return result
};