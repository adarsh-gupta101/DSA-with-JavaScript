/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {




    // BFS
    // let subset=[]

    // subset.push([])


    // for(let i=0;i<nums.length;i++){
    //     let length=subset.length;
    //     let num=nums[i]

    //     for(let j=0;j<length;j++){
    //         subset.push([...subset[j],nums[i]])
    //     }
    // }


    // return subset


    //DFS


    let subsets = [];

    function DFS(nums, slate, index) {
        if(index>nums.length) return
        if (index == nums.length) {
            // console.log(slate,index)
            subsets.push(slate.slice());
            return;
        }

        slate.push(nums[index]);
        DFS(nums, slate, index + 1);
        slate.pop();
        DFS(nums, slate, index + 1);
    }

    DFS(nums, [], 0);

    return subsets;
};
