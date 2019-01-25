/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let val = l1.val + l2.val;
    let overflow = 0;
    if(val >= 10){
        val -= 10;
        overflow = 1;
    }   
    const head = new ListNode(val);

    let curr = head;
    let first = l1.next;
    let second = l2.next;
    
    while(first !== null && second !== null){
        val = first.val + second.val + overflow;
        if(val >= 10){
            val -= 10;
            overflow = 1;
        } else {
            overflow = 0;
        }
        curr.next = new ListNode(val);
        curr = curr.next;
        first = first.next;
        second = second.next;
    }
    
    let rest = first === null ? second : first
    while(rest !== null){
        val = rest.val + overflow;
        if(val >= 10){
            val -= 10;
            overflow = 1;
        } else {
            overflow = 0;
        }
        curr.next = new ListNode(val);
        curr = curr.next
        rest = rest.next;
    }
    if(overflow) {curr.next = new ListNode(overflow);}
    return head;
};