/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // k = nums.length - (k % nums.length);
    k = k % nums.length
    // while (k > 0) {
    //     nums.unshift(nums.pop());
    //     k--;
    // }
    // return nums;



    function reverse(arr, start, end) {

        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            end--
            start++
        }

    }

    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k-1)

    reverse(nums, k, nums.length - 1)


return nums


};
