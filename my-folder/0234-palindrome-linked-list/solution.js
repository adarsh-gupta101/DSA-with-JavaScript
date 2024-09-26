// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindrome = function (head) {

    if (head == null || head.next == null) {
        return true
    }

    let stack = []

    let temp = head

    while (temp != null) {

        stack.push(temp.val)

        temp = temp.next
    }

    temp = head

    while (temp != null) {

        if (stack.pop() != temp.val) {
            return false
        }
        temp = temp.next
    }
    return true

};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var isPalindrome = function (head) {
//     if (head === null || head.next === null) {
//         return true;
//     }

//     let stack = [];
//     let temp = head;

//     // Step 1: Push all elements into the stack
//     while (temp != null) {
//         stack.push(temp.val);
//         temp = temp.next;
//     }

//     temp = head;

//     // Step 2: Compare the values in the linked list with those in the stack
//     while (temp != null) {
//         if (temp.val !== stack.pop()) {
//             return false;
//         }
//         temp = temp.next;
//     }

//     return true;
// };

