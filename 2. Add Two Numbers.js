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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let helper = function(p1, p2, delta){
    if(!p1 && !p2) {
      return delta > 0?new ListNode(delta):null;
    }

    p1 = p1?p1:{val:0};
    p2 = p2?p2:{val:0};

    let sum  = p1.val+p2.val+delta;
    let val = sum%10;
    delta = Math.floor(sum/10);
    let node = new ListNode(val);
    node.next = helper(p1.next, p2.next, delta);
    return node;
  }

  return helper(l1,l2, 0);

};
