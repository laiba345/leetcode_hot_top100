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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 对于链表的题目一般都是需要创建虚拟头节点来表示
  let dummy = new ListNode(-1);
  dummy.next = head;
  // 删除倒数第n个节点
  // 找到倒数第n+1个节点；
  let x = findFromEnd(dummy, n + 1);
  // 链表删除操作
  x.next = x.next.next;
  return dummy.next;
}

// 找到链表的倒数第K个节点
function findFromEnd(head: ListNode | null, k: number): ListNode | null {
  let p1 = head;
  // p1先走k步
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }
  let p2 = head;
  // p1和p2同时走n-k步
  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  // p2现在指向第n-k个节点；也就是倒数第k个节点
  return p2;
}
