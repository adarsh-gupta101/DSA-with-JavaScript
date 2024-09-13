/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let p1 = 1;
    let nonDupPosition = 1;

    while (p1 < nums.length) {
        if (nums[nonDupPosition - 1] != nums[p1]) {
            nums[nonDupPosition] = nums[p1];
            nonDupPosition++;
        }
        p1++;
    }

    return nonDupPosition;
};
