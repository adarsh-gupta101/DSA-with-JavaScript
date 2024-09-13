/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let p1 = 0;
    let nondupe = 0

    while (p1 < nums.length) {



        if (nums[p1] != val) {
            nums[nondupe] = nums[p1]
            nondupe++
        }
        p1++

    }

    return nondupe

};
