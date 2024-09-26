/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let ptrA = headA; ptrB = headB

    while (ptrA !== ptrB) {
        ptrA = ptrA ? ptrA.next : headB

        ptrB = ptrB ? ptrB.next : headA
    }

    return ptrA



    return ptrA;

};
