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
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }

  let mid = reverse(slow);

  while(mid){
    if(mid.val !== head.val){
      return false;
    }
    mid = mid.next;
    head = head.next;
  }

  return true;
};

let reverse = function(node){
  if(!node) return node;

  let cur = node;
  let pre = null;
  while(cur){
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
