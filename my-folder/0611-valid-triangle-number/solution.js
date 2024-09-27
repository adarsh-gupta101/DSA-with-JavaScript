/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    let res = 0
    for (let i = 2; i < nums.length; i++) {

        searchPair(nums[i], i)
    }

    function searchPair(element, index) {

        let end = index - 1, start = 0
        while (start < end) {
            if (nums[end] + nums[start] > element) {
                res += end - start;
                end--
            } else {
                start++
            }
        }
    }

    return res

};
