/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {



    function mergeSort(nums) {

        if (nums.length <= 1) return nums; // Base case
        let mid = Math.floor(nums.length / 2)
        let left = mergeSort(nums.slice(0, mid))
        let right = mergeSort(nums.slice(mid))


        return merge(left, right);



    }


    function merge(left, right) {
        let i = 0, j = 0;

        let result = []
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i])
                i++
            } else {
                result.push(right[j])
                j++
            }
        }

        while (i < left.length) {
            result.push(left[i])
            i++
        }

        while (j < right.length) {
            result.push(right[j])
            j++
        }

        return result
    }


    return mergeSort(nums)


    //     if(nums.length<=1) return nums




    //     let left=[]
    //     let right=[],pivot=nums[nums.length-1]


    //     for(let i=0;i<nums.length-1;i++){
    //         if(nums[i]<pivot){
    //             left.push(nums[i])
    //         }else{
    //             right.push(nums[i])
    //         }
    //     }


    //     return [...sortArray(left),pivot,...sortArray(right)]

};
