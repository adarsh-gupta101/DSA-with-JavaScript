/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {


    let hashMap = {}


    for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = 1 + (hashMap[nums[i]] || 0);

    }

    for(let j in hashMap){
        if(hashMap[j]==1){
            return Number(j)
        }
    }

};
