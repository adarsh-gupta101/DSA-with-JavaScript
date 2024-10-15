/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {


    let start = 0; let count = 0, max = 0

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] == 1) {
            count++
        }


        if (end - start + 1 - count > 1) {
            if (nums[start] == 1) {
                count--
            }
            start++
        }

        max = Math.max(max, end - start + 1)
    }

    return --max

};
