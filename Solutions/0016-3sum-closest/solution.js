/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (arr, target) {
      arr.sort((a, b) => a - b)


    let minimum = Infinity

    for (let i = 0; i < arr.length - 2; i++) {

        let start = i+1;
        let end = arr.length - 1


        while (start < end) {
            let targetSum = target - (arr[i] + arr[start] + arr[end])

            if (targetSum == 0) {
                return target-targetSum
            }

            if (Math.abs(targetSum) < Math.abs(minimum)) {
                minimum = targetSum
            }

            if (targetSum > 0) {
                start++
            } else {
                end--
            }
        }
    }

    return target - minimum;

};
