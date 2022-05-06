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
  if(!head && !head.next) return false;

  let fast = head;
  let slow = head;
  let mid = null;
  while(fast && fast.next){
    fast = fast.next.next;
    if(null == fast){
      mid = slow;
    }
    slow = slow.next;
  }

  if(fast){
    mid = slow;
  }

  mid = reverse(mid);

  while(mid && head){
    if(mid.val !== head.val){
      return false;
    }
    mid = mid.next;
    head = head.next;
  }

  return true;
};

let reverse = function(node){
  if(!node || !node.next) return node;

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
