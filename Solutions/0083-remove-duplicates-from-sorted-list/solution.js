/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

    // let ptr1 = head, ptr2 = head.next

    // while (ptr1 && ptr2) {
    //     if (ptr1.val == ptr2.val) {
    //         ptr1.next = ptr2.next
    //     }
    // }

    let temp=head;

    while(temp && temp.next){
        if(temp.next.val==temp.val){
            temp.next=temp.next.next
        }else{
            temp=temp.next
        }
    }

return head
};
