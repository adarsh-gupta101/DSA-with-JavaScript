// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var findMin = function (nums) {
    let start = 0, end = nums.length - 1
    if (nums.length === 1 || nums[start] < nums[end]) {
        return nums[start];
    }


    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);


        if (mid < end && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }

        if (mid > start && nums[mid] < nums[mid - 1]) {
            return nums[mid]
        }

        if (nums[start] == nums[mid] && nums[mid] == nums[end]) {

            start++

            // end--
        } else if (nums[start] <= nums[mid]) {
            start = mid + 1
        } else {
            end = mid
        }
    }



};


var findMin = function(nums) {
    let start = 0, end = nums.length - 1;
    
    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            // When nums[mid] and nums[end] are equal
            end--;
        }
    }
    
    return nums[start];
};
