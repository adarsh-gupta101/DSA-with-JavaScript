/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {


    let freq = {}


    for (let nums of arr) {
        freq[nums] = (freq[nums] || 0) + 1
    }

    let array=Array.from(Object.values(freq))

    array.sort((a,b)=>a-b)

    let length=array.length;

    for(let nums of array){
        if(k>=nums){
            k=k-nums
            length--
        }
        else{
            return length
        }
    }

    return length



};
