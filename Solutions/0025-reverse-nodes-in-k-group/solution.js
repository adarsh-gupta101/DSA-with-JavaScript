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
var reverseKGroup = function (head, k) {


    // first check whether we have 


    // function hasKnode(node, k) {
    //     let count = 0;

    //     while (node != null) {
    //         node = node.next
    //         count++
    //     }

    //     return count >= k
    // }

    function hasKnode(node, k) {
        let count = 0;
        while (node != null && count < k) {
            node = node.next;
            count++;
        }
        return count === k;
    }



    if (k <= 1 || head === null) {
        return head
    }

    let current = head
    let previous = null

    while (hasKnode(current, k)) {

        let LastofPreviousList = previous
        let lastofSubList = current;
        let i = 0;
        while (current != null && i < k) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
            i++
        }


        if (LastofPreviousList != null) {
            LastofPreviousList.next = previous
        } else {
            head = previous
        }
        lastofSubList.next = current

        if (current === null) {
            break
        }



        previous = lastofSubList





    }





    return head

};
