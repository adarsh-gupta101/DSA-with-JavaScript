/**
 * @param {number[]} arr
 * @return {number}
 */
var findMin = function (arr) {



    let start = 0, end = arr.length - 1


    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (arr.length === 1 || arr[start] < arr[end]) {
            return arr[start];
        }

        if (arr[mid] > arr[mid + 1] && mid <= end) {
            return arr[mid + 1]
        }

        if (arr[mid] < arr[mid - 1] && mid > start) {
            return arr[mid]
        }

        if (arr[start] < arr[mid]) {
            // this part is sorted
            start = mid + 1

        } else {
            //this part is sorted
            end = mid - 1

        }




    }
    // return arr[0]
};
