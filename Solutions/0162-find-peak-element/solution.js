/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {


    let start = 0;
    end = arr.length - 1


    while (start < end) {
        let mid = start + Math.floor((end - start) / 2)

        if (arr[mid] > arr[mid + 1]) {
            end = mid
        } else {
            start = mid + 1
        }



    }

    return start
};
