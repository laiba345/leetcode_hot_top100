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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 创建一个新的链表节点，里面存取相关的值，直接new出来即可，
    let pre = new ListNode(0)
    // 两个节点：一个pre用来保持原先的链表，一个cur用来进行遍历操作
    // 遍历的话：从pre开始一步一步往后面走
    let cur = pre
    let carry = 0 // 设置进位操作
    // 有一个链表节点为空的话，就退出
    while(l1 != null || l2 != null) {
        let x = (l1 == null ? 0 : l1.val)
        let y = (l2 == null ? 0 : l2.val)
        let sum = x + y + carry

        // 开始考虑情况；查看是否大于10；大于10需要进行进位操作
        if(sum / 10 >= 1) {
            carry = 1
        }else {
            carry = 0
        }
        // 对每一个位置上的内容进行更新，
        // 每个词得到的最后结果都是通过new来进行获取操作的
        sum = sum % 10 
        // cur的next的值存入的就是sum
        cur.next = new ListNode(sum)
        // 每次弄完以后cur;l1;l2都需要向后进行移动操作
        cur = cur.next
        // 每次弄完一位，cur都需要向下来进行移动操作
        if(l1 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
    }
    // 上述循环要是全部结束了，最终遍历的结果要是还是carry = 1
    // 才将最后的结果放入到cur.next中
    if(carry == 1) {
        cur.next = new ListNode(carry) // 创建一个新的链表节点；并将该链表节点放入到cur.next中
    }
    // 最后返回pre.next 即可
    return pre.next
};


