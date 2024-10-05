/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    end = nums.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] == target) return mid;

        if (nums[start] <= nums[mid]) {
            //first half is sorted in ascending
            // console.log(nums[start], nums[mid])
            if (target < nums[mid] && target>=nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target<=nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
};

