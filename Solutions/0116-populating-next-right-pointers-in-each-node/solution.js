/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {


if(root==null) return root

    let queue = [root]

    while (queue.length > 0) {


        let previous = null
        let levelLength = queue.length;

        for (let i = 0; i < levelLength; i++) {
            let current = queue.shift()
            if(previous!=null){
                previous.next=current
            }

            previous=current

            if(current.left!=null) queue.push(current.left)
            if(current.right!=null) queue.push(current.right)


        }
    }

    return root
};
