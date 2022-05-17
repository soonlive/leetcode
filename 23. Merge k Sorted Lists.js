/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 1) return null;

  let merge = function (p1, p2) {
    if (!p1 || !p2) return p1 || p2;

    if (p1.val < p2.val) {
      p1.next = merge(p1.next, p2);
      return p1;
    } else {
      p2.next = merge(p1, p2.next);
      return p2;
    }
  };

  return lists.reduce((pre, cur) => {
    return merge(pre, cur);
  });
};
