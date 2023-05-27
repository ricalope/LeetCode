/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let total = 0;
    let result = new ListNode(-1);
    let temp = result;
    
    while(l1 || l2 || total) {
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;
        
        let next = (value1 + value2 + total) % 10;
        result.next = new ListNode(next)
        result = result.next;
        
        total = Math.floor((value1 + value2 + total) / 10);
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return temp.next;
};