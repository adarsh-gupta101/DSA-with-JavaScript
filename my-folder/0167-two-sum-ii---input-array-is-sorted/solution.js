/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers = [2, 7, 11, 15], target = 9) {
    let start = 0,
        end = numbers.length-1;
        // result = [];

    while (start < end) {
        // console.log(numbers[start] + numbers[end])
        if (numbers[start] + numbers[end] == target) {
            // result.push([start + 1, end + 1]);
            return [start + 1, end + 1];
        } else if (numbers[start] + numbers[end] > target) {
            end--;
        } else {
            start++;
        }
    }

    // return result;
};
