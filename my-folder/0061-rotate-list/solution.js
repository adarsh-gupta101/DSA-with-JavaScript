/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    if (k == 0 || head?.next == null) {
        return head
    }


    let tail = head; len = 1

    while (tail.next != null) {
        tail = tail.next;
        len++
    }

    k = len - k % len
    let i = 0;
    tail.next = head
    while (i < k) {
        tail = tail.next
        head = tail.next
        i++
    }

    tail.next = null

    return head
};


