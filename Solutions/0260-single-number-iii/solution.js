/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {

    let xor=0

    for(let i=0;i<nums.length;i++){
        xor=xor^nums[i]
    }
    
    let right=1

    while((right & xor)==0){
        right=right<<1
    }

    let num1=0,num2=0

    for(let i=0;i<nums.length;i++){
        
        if((nums[i] & right) !==0){
            num1^=nums[i]
        }else{
            num2^=nums[i]
        }
    }

    return [num1, num2]
};
