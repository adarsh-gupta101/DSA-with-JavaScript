/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums = [1, 1, 2]) {
    let index = 0;
    while (index < nums.length) {
        let number = nums[index] - 1;

        if (nums[index] != nums[number])
            [nums[index], nums[number]] = [nums[number], nums[index]];
        else {
            index++;
        }
    }

    let dupes = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            dupes.push(nums[i]);
        }
    }

    return dupes
};
