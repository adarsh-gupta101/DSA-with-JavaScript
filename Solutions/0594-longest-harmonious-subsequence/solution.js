/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let frequency = {}
    let len = 0;

    for (let i = 0; i < nums.length; i++) {
        frequency[nums[i]] = frequency[nums[i]] ? frequency[nums[i]] + 1 : 1
    }

    for (let keys in frequency) {
        let key = parseInt(keys);

        if (frequency[key + 1]) {
            len = Math.max(len, frequency[key + 1] + frequency[key])

        }
    }
    return len;


};
