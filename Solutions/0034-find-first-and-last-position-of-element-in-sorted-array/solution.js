/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let index = -1;
    let left = bSearch(true);
    let right = bSearch(false);
    function bSearch(goleft) {
        let start = 0,
            end = nums.length - 1;
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);

            if (nums[mid] == target) {
                index = mid;
                if (goleft) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return index;
    }

    return [left, right];
};
