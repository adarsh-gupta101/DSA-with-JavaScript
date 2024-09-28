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
var detectCycle = function (head) {
    // find cycle length
    if (!head || !head.next) return null;
    let cycleLength = 0;

    let slow = head,
        fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            cycleLength = findLength(slow);
            return findStart(head, cycleLength);
            break;
        }
    }
    return null

};
function findLength(slow) {
    let current = slow;
    let cycleLength = 0;

    while (true) {
        current = current.next;
        cycleLength++;

        if (current == slow) {
            break;
        }
    }

    return cycleLength;
}

function findStart(head, length) {
    let fast = head,
        slow = head;

    while (length > 0) {
        fast = fast.next;
        length--;
    }

    while (fast != slow) {
        fast = fast.next;
        slow = slow.next;


    }
    return slow
}

