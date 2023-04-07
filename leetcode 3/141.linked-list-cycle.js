/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if(!head || !head.next) return false;
  let fast = head.next;
  let slow = head;
  while(fast != slow){
      if(!fast || !fast.next){
          return false;
      }
      fast = fast.next.next;
      slow = slow.next;
  }
  return true;
};
// @lc code=end

