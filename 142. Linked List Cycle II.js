/**
 * Created by Xin on 2022/5/6.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head || !head.next) return null;

  let fast = head;
  let slow = head;

  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow){
      break;
    }
  }

  if(!fast || !fast.next){
    return null;
  }

  fast = head;
  while(fast !== slow){
    fast = fast.next;
    slow = slow.next;
  }

  return fast;
};
