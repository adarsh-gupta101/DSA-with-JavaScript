/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr = [1, 2, 3, 4], k = 2) {
    let i = 0;
    let expected = 1;
    let oldK = k;

    while (k > 0) {
        if (i < arr.length && arr[i] == expected) {
            i++;
        } else {
            k--;
        }
        expected++;
    }

    return expected - 1;
};
