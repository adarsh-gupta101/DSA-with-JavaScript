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
// var sortList = function (head) {

//     let data = []

//     let temp = head;

//     while (temp != null) {

//         data.push(temp.val)
//         temp = temp.next;
//     }

//     data.sort((a, b) => a - b)

//     temp = head;

//     while (temp != null) {

//         temp.val = (data.shift())
//         temp = temp.next;
//     }


//     return head
// };


var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    function findMiddle(head) {
          let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
    let middle = findMiddle(head)
    let right=middle.next
    middle.next = null



    function Merge(head1, head2) {
        const dummy = new ListNode(-1)
        let curr = dummy

        while (head1 && head2) {
            if (head1.val <= head2.val) {
                curr.next = head1
                head1 = head1.next
            } else {
                curr.next = head2
                head2 = head2.next
            }
            curr = curr.next;

        }

        curr.next = head1 || head2;

        return dummy.next;


    }

     // Recursively sort both halves
    let left = sortList(head);
    let sortedRight = sortList(right);

 return Merge(left, sortedRight)
 
 }
