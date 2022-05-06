/**
 * Created by Xin on 2022/5/6.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let v = [head.val];
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
    v.push(slow.val);
  }

  if(!fast){
    v.pop();
  }

  while(slow){
    let top = v.pop();
    if(slow.val !== top){
      return false;
    }
    slow = slow.next;
  }

  return true;
};
