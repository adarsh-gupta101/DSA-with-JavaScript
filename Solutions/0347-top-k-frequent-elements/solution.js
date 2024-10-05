/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let hash = {}

    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1
    }

    let heap = new MinPriorityQueue()

    for (let num in hash) {

        heap.enqueue(num, hash[num])

        if (heap.size() > k) {
            heap.dequeue()
        }
    }


    let result = []

    while (heap.size() > 0) {
        result.push(Number(heap.dequeue().element))
    }

    return result
    // console.log(result)




};
