/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {



    let minHeap = new MaxPriorityQueue()


    for (nums of points) {
        let sqrt = ((nums[0] * nums[0]) + (nums[1] * nums[1]))
        minHeap.enqueue(nums, sqrt)


        if (minHeap.size() > k) {
            minHeap.dequeue()
        }

    }

    let result = []

    // console.log(minHeap)

    while (minHeap.size() > 0) {
        result.push(minHeap.dequeue().element)
    }

    return result




};
