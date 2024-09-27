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
var removeNthFromEnd = function (head, n) {

    let slow = head, fast = head
    let len = 0, temp = head;

    while (temp) {
        temp = temp.next
        len++
    }

      if (n === len) {
        return head.next;
    }

  

    n=len-n-1

    while(n>0){
        slow=slow.next
        // fast=slow.next
        n--
    }

    slow.next=slow.next.next

    return head


};
