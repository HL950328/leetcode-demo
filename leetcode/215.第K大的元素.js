// var findKthLargest = function(nums, k) {
//   var n = nums.length;
//   let max = nums[0]
//   for (i=0; i<k; i++) {
//       let index = 0
//       for (j = 1; j <= n -1; j++) {
//           if (nums[j] > max) {
//               max = nums[j]
//               index = j
//           }
//       }
//       nums.splice(index, 1)
//   }
//   return max
// }

// var findKthLargest = function (nums, k) {
//   const len = nums.length;
//   const targetIndex = len - k;
//   let left = 0, right = len - 1;

//   while (left < right) {
//     const index = partition(nums, left, right);
//     if (index === targetIndex) {
//       return nums[index];
//     } else if (index < targetIndex) {
//       left = index + 1;
//     } else {
//       right = index - 1;
//     }
//   }

//   return nums[left];
// };

// function partition(nums, start, end) {
//   const povit = nums[start];
//   while (start < end) {
//     while (start < end && nums[end] >= povit) {
//       end--;
//     }
//     nums[start] = nums[end];
//     while (start < end && nums[start] < povit) {
//       start++;
//     }
//     nums[end] = nums[start];
//   }
//   nums[start] = povit;
//   return start;
// }



function quickSort(arr, left, right, target) {
  let partitionIndex;
  let l = left;
  let r = right;

  // 标准快排不需要这个等于  比如l和r都是3 排序不用排了 因为就一个数
  // 但是我们现在要找那个值, 所以这时候需要进去把值返回掉
  if (l <= r) {
      partitionIndex = partition(arr, l, r);
      if(partitionIndex === target) {
        return arr;
      }else if(partitionIndex < target) {
        // 往右边找
        quickSort(arr, partitionIndex + 1, r, target);
      } else {
        quickSort(arr, l, partitionIndex - 1, target);
      }

  }
  return arr;
}

function partition(arr, left ,right) {     //分区操作
  //设定基准值位置（pivot）当然也可以选择最右边的元素为基准 也可以随机选择然后和最左或最右元素交换
  let pivot = left;
  let index = pivot + 1;

  for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) { // 以arr[left]为比较基准
          [arr[i], arr[index]] = [arr[index], arr[i]];
          index++;
      }        
  }

  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}


var findKthLargest = function(nums, k) {
  const target = nums.length - k;
  const arr = quickSort(nums, 0, nums.length - 1, target);
  return arr[target];
};

findKthLargest([3,1,2,5,6,4], 1)
