/**
 * Created by Xin on 24/08/2018.
 *
 */
// dirname()

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


test('', () => {
  const foo = require('../23. Merge k Sorted Lists');

  const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const l3 = new ListNode(2, new ListNode(6));
  expect(foo([l1, l2, l3])).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6)))))))));
});

