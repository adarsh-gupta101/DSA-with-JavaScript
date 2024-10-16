/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = new Array(nums.length ).fill(0);
    let right = new Array(nums.length ).fill(0);

    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        start = start + nums[i];
        left[i] = left[i] + start;
    }
    // left[nums.length - 1] = start;

    let end = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        end = end + nums[i];
        right[i] = end;
    }
    right[0] = end;

    for(let i=0;i<nums.length;i++){
        if(left[i]==right[i]){
            return i
        }
    }
    
    return -1
};


pivotIndex([2,1,-1])
