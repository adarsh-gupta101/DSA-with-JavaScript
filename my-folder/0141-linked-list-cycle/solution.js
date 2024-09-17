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
var hasCycle = function(head) {
    let first=head?.next
    let second=head?.next?.next

    while(first!=null && second!=null){
        if(first==second) return true
        first=first?.next
        second=second?.next?.next

    }

    return false
    
};
