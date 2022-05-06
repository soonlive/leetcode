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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head || !head.next) return false;

  let fast = head;
  let slow = head;
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow ){
      return true;
    }
  }

  return false;
};
