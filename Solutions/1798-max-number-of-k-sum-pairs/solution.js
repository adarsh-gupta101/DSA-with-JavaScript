/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums.length - 1;
    let count = 0;
    while (start < end) {
        // console.log(start,end)
        if (nums[start] + nums[end] == k) {
            count++;
            start++
            end--
        } else if (nums[start] + nums[end] > k) {
            end--;
        } else {
            start++;
        }
    }

    return count;
};
