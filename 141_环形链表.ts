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
// 对于这种环形链表的验证；都是使用双指针的技巧来解决的，这一点非常关键
function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head
    while(fast != null && fast.next != null) {
        // 快慢指针相遇的话，表示有环
        slow = slow.next
        fast = fast.next.next // 走两步
        if(slow == fast) {
            return true 
        }
    }
    return false 
};