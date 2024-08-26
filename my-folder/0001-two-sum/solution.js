/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // for(i=0;i<nums.length;i++){
    //     for(j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]==target){
    //             return [i,j]
    //         }
    //     }
    // }
let hash={}

for(i=0;i<nums.length;i++){
    // if(!(nums[i] in hash)){
    //     hash[nums[i]]=i;
    // }
    if((target-nums[i]) in hash){
        return [hash[target-nums[i]],i]
    }

    hash[nums[i]]=i;
}
};
