/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let a = head, b = head
    while(n--) {
        a = a.next
    }
    while(a && a.next) {
        b = b.next
        a = a.next
    }
    if(!a) head = head.next
    b.next = b.next ? b.next.next : null
    return head
};