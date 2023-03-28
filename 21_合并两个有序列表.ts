/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 链表的操作；总是会创建一个虚拟节点dummy
  let dummy = new ListNode(-1),
    p = dummy;
  // 因为是链表指针，所以头指针就是指向list1
  let p1 = list1,
    p2 = list2;
  while (p1 != null && p2 != null) {
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    p = p.next;
  }
  // 后续不为空的话，直接拼在后面即可
  if (p1 != null) p.next = p1;
  if (p2 != null) p.next = p2;
  return dummy.next;
}
