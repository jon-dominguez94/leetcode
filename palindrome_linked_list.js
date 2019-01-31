/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    if(!head) return true;
    const values = [];
    while(head){
        values.push(head.val);
        head = head.next;
    }
    
    for(let i = 0; i < values.length / 2; i++){
        if(values[i] !== values[values.length - 1 - i])
            return false;
    }
    
    return true
};