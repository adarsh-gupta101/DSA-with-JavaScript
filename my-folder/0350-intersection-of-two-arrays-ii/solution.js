/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {



    let hash = {}
    for (let i = 0; i < nums1.length; i++) {
        if (!(nums1[i] in hash)) {
            hash[nums1[i]] = 0
        }
        hash[nums1[i]]++

    }
    let result = []
    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] in hash && hash[nums2[i]] > 0) {
            result.push(nums2[i])
            hash[nums2[i]]--

        }
    }

    return result

};
