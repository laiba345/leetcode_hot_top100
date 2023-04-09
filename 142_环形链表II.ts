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
// 和之前一样都是使用双指针来执行；
// 思路：快慢指针相遇时，让其中一个指针指向头节点
// 然后：再让它以相同速度前进，再次相遇时所在节点位置就是环开始的位置
function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head, fast = head
    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if(slow == fast) break
    }
    // 考虑空指针和没有环的情况
    if(fast == null || fast.next == null) return null
    // 将慢指针重新指向头节点
    slow = head 
    while(slow !== fast) {
        // 快慢指针同时前进，相交点就是链开始的位置
        slow = slow.next
        fast = fast.next
    }
    return slow 
};