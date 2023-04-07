/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  let headNode = new ListNode(0,head);
  let curNode = headNode;
  
  let count = 0;// 链表长度
  while(curNode.next){
    curNode = curNode.next;
    count++;
  }
  
  curNode.next = headNode.next;
  
  let n = count - k%count; // 该移动多少到达偏移后的首部节点
  while(n){
    curNode = curNode.next;
    n--;
  }
  let resNode = curNode.next;
  curNode.next = null
  return resNode
}
// @lc code=end