/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left == right) return head

    let current = head, previous = null

    for (let i = 0; i < left - 1; i++) {
        if (current != null) {

            previous = current
            current = current.next
        }
    }

    let LastNodeofFirstPart = previous
    let LastNodeofSubpart = current

    let len = 0
    while (current != null && len < right - left + 1) {
        let next = current.next
        current.next = previous
        previous = current

        current = next
        len++
    }
    if (LastNodeofFirstPart != null) {

        LastNodeofFirstPart.next = previous
    }else{
        head=previous
    }

    LastNodeofSubpart.next = current

    return head

};
