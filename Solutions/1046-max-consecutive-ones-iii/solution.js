/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {

    let maxOnesCount = 0;

    let start = 0, maxLength = 0

    for (end = 0; end < nums.length; end++) {
        if (nums[end] == 1) maxOnesCount++;


        if (end - start + 1 - maxOnesCount > k) {
            if (nums[start] == 1) maxOnesCount--
            start++
        }

        maxLength = Math.max(maxLength, end - start + 1)

    }
    return maxLength
};
