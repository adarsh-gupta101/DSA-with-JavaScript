/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    let low = 0, high = nums.length - 1

    let i = 0;
    while (i <= high) {

        if (nums[i] == 0) {
            [nums[low], nums[i]] = [nums[i], nums[low]]
            low++
            i++
        } else if (nums[i] == 1) {
            i++

        } else {
            [nums[high], nums[i]] = [nums[i], nums[high]]
            high--
            // i++
        }

    }

    return nums

};
