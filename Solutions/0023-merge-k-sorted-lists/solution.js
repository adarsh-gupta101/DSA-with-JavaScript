/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    let heap = new MinPriorityQueue()


    for (let i = 0; i < lists.length; i++) {

        let head = lists[i]

        while (head != null) {
            heap.enqueue(head.val)
            head = head.next
        }
    }

    let node = new ListNode(0, null)
    let dummy = node
    while (heap.size() > 0) {
        let val = heap.dequeue().element
        dummy.next = new ListNode(val, null)
        dummy = dummy.next

    }

    return node.next


};
