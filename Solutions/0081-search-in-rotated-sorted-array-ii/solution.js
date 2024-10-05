/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] == target) return true;

        if (nums[start] == nums[mid] && nums[end] == nums[mid]) {
            start++;
            end--;
        }

        else if (nums[start] <= nums[mid]) {
            // start to end sorted ascending
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return false;
};
