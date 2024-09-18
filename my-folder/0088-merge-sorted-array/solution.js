/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (n == 0) return;
    // if (m == 0) { nums1 = nums2 }

    let first = m - 1;
    let second = n - 1;
    let high = m + n - 1;

    while (first > -1 && second > -1) {
        if (nums1[first] > nums2[second]) {
            nums1[high] = nums1[first];
            first--;
        } else {
            nums1[high] = nums2[second];
            second--;
        }
        high--;
    }

    while (second >= 0) {
        nums1[high] = nums2[second];
        second--;
        high--;
    }

    return nums1;
};

