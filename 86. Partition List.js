/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let p = head;
  let dummy1 = new ListNode(-1);
  let dummy2 = new ListNode(-1);
  let p1 = dummy1;
  let p2 = dummy2;

  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }

    let tmp = p.next;
    p.next = null;
    p = tmp;
  }

  p1.next = dummy2.next

  return dummy1.next

};