/**
 * Created by Xin on 2022/4/21.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if(null === head) return head;

  let list = [];
  while(head){
    list.push(new TreeNode(head.val));
    head = head.next;
  }

  let traverse = function(arr, start, end){
    if(start > end){
      return null;
    }

    let mid = (end+start)>>1;
    let p = arr[mid];


    let lf = traverse(arr, start, mid -1);
    let rt = traverse(arr, mid + 1, end);

    p.left = lf;
    p.right = rt;
    return p;
  }

  return traverse(list, 0, list.length - 1);
};
