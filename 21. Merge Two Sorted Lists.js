/**
 * Created by Xin on 2022/2/27.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let size = list2.length;
  for(let i = 0; i<list1.length;++i){
    let current = list1[0];
    for(let j = 0; j<size;++j){
      let target = list2[j];
      if(current.val>=target.val){
        current.next = target.next;
        target.next = current;
        list2.splice(j,0,current);
        ++size;
        break;
      }
    }
  }
  return list2;
};
