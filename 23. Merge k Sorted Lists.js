function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
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
  let dummy = new ListNode(-1);
  let currentNode = dummy;
  let priorityQueue = lists.reduce((pre, cur) => {
    if (cur) {
      pre.push(cur)
    }
    return pre
  }, []);
  priorityQueue.sort(compare);

  while (priorityQueue.length > 0) {
    let node = priorityQueue.shift();
    currentNode.next = node;
    currentNode = currentNode.next;

    if (node && node.next) {
      priorityQueue.push(node.next);
      priorityQueue = priorityQueue.sort(compare)
    }
  }

  return dummy.next;
};


function compare(a, b) {
  if (a.val < b.val) {
    return -1;
  }
  if (a.val > b.val) {
    return 1;
  }
  return 0;
}

module.exports = mergeKLists;