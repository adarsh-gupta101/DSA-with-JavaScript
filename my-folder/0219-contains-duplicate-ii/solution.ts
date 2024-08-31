function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hash = {};
    let start = 0;
    // 1 2 3 1
    for (let end = 0; end < nums.length; end++) {
        // console.log(hash, "\n")
        if ((nums[end] in hash)) {
            // hash[nums[end]] = end;
            if (nums[hash[nums[end]]] == nums[end] && Math.abs(hash[nums[end]] - end) <= k) {
                return true;
            }
        }
        hash[nums[end]] = end
    }
    return false;
}




// function containsNearbyDuplicate(nums, k) {
//   const indexMap = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     if (indexMap.has(nums[i])) {
//       // Check if the current index and the last stored index are within distance k
//       if (i - indexMap.get(nums[i]) <= k) {
//         return true
//       }
//     }
//     // Update the map with the current index for the number
//     indexMap.set(nums[i], i)
//   }

//   return false
// }

