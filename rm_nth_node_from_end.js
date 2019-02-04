/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const windowSize = n + 1;
    let length = 0;
    let myLength = 0;
    let myHead = head;
    let curr = head;
    
    while(curr){
        length += 1;
        myLength += 1;
        if(myLength > windowSize){
            myHead = myHead.next
        }
        curr = curr.next;
    }
    
    if(n === length){
        return head.next;
    } else {
        let removed = myHead.next;
        myHead.next = removed.next;
        removed.next = null;
    }
    
    return head;
    
};