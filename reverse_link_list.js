/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let newHead = new ListNode(null);
    let curr = null;
    
    while(head){
        newHead.val = head.val;
        newHead.next = curr;
        curr = newHead;
        newHead = new ListNode(null);
        head = head.next
    }
    return curr;
    
};