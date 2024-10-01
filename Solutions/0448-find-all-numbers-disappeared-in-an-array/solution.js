/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let index = 0;

    while (index< nums.length) {
        let current = nums[index] - 1;
        if (nums[index] != nums[current]) {
            [nums[index], nums[current]] = [nums[current], nums[index]];
        } else {
            index++;
        }
    }

    let missing = [];
    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            missing.push(i+1);
        }
    }

    return missing;
};

findDisappearedNumbers((nums = [4, 3, 2, 7, 8, 2, 3, 1]));

