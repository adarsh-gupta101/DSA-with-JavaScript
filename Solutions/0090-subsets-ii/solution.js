/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {




    let subsets = []


    nums.sort()


    function DFS(nums, slate, index) {

        if (index == nums.length) {
            subsets.push(slate.slice())
            return
        }
        slate.push(nums[index])
        DFS(nums, slate, index + 1)
slate.pop()

        while (index + 1 < nums.length && nums[index] == nums[index + 1]) {
            index++
        }
        DFS(nums, slate, index + 1)

    }

    DFS(nums, slate=[], 0)



return subsets





};
