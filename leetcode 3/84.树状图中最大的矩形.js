// 计算面积最大的矩形，就是计算每个柱子高度能够得到的矩形做比较，取最大值。每个矩形的面积等于当前柱子的高度乘以横向的长度， 
// 横向的长度就是找到当前柱子左边第一个比他小的柱子 和右边第一个比他小的柱子。 这个用单调递增栈来解决

// var largestRectangleArea = function(heights) {
//   let stack = []; // 定义一个单调递增栈
//   heights.push(-1) // 
//   let maxans = 0;
//   for (let i=0;i<heights.length;i++) {
//       let cur = heights[i]
//       // 栈不为空 并且当前柱子小于栈顶的柱子高度 进入循环
//       while(stack.length > 0 && cur < heights[stack[stack.length - 1]]) {
//           // 弹出栈顶的索引值
//           let index = stack.pop()
//           // 计算弹出的柱子 和他左边第一个比他小的柱子之间的距离  如果栈为空说明当前弹出的柱子左边的柱子都比他要高，如果不为空，那就找到与新栈顶的距离
//           let left = stack.length === 0 ? index : index - stack[stack.length-1] - 1
//           // 计算弹出的柱子 和他右边第一个比他小的柱子之间的距离
//           let right = i - index - 1
//           maxans = Math.max(maxans, (left + right + 1) * heights[index])
//       }
//       // 将当前柱子的索引压入栈
//       stack.push(i)
//   }
//   return maxans
// };

var largestRectangleArea = function(heights) {
    const len = heights.length;
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return heights[0];
    }
    const stack = [];
    let res = 0;
    for (let i = 0; i < len; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) { // 栈顶元素大于当前元素，说明该栈顶元素已碰到右边界
            const h = heights[stack.pop()]; // 栈顶元素高度
            let w = i;
            if (stack.length) { // 宽度
                w = i - stack[stack.length - 1] - 1;
            }
            res = Math.max(res, h * w);
        }
        stack.push(i);
    }
    while (stack.length) {
        const h = heights[stack.pop()];
        let w = len;
        if (stack.length) {
            w = len - 1 - stack[stack.length - 1];
        }
        res = Math.max(res, h * w);
    }
    return res;
};

largestRectangleArea([1,2,3,4,3,2,1])