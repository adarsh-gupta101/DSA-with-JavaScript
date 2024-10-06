/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {



    // first find the location of x 
    //use two pointers
    //use heap

    function binarySearch(arr, x) {

        let start = 0; end = arr.length - 1
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)

            if (arr[mid] == x) {
                return mid
            }
            else if (arr[mid] > x) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }

        return start
    }

    let index = binarySearch(arr, x);


    let leftIndex = index-1
    let rightIndex = index

    let heap = new MaxPriorityQueue()


    while (leftIndex >= 0 && rightIndex < arr.length) {




        // if()
        if (Math.abs(arr[leftIndex] - x) <= Math.abs(arr[rightIndex] - x)) {

            // if (heap.size() < k) {

            heap.enqueue(arr[leftIndex], Math.abs(arr[leftIndex] - x));
            leftIndex--

            // }
        } else {

            heap.enqueue(arr[rightIndex], Math.abs(arr[rightIndex] - x))
            // if (heap.size() < k) {
            rightIndex++

            // }
        }
        if (heap.size() > k) { heap.dequeue() }

    }

    while (leftIndex >= 0 && heap.size() < k) {
        // if (heap.size() < k) {

        heap.enqueue(arr[leftIndex], Math.abs(arr[leftIndex] - x));
        // }
        leftIndex--
    }

    while (rightIndex < arr.length && heap.size() < k) {
        // if (heap.size() < k) {

        heap.enqueue(arr[rightIndex], Math.abs(arr[rightIndex] - x));
        // }
        rightIndex++
    }



    let result = [];

    while (heap.size() > 0) {
        result.push(heap.dequeue().element)
    }

    console.log(result)
    return result.sort((a, b) => a - b)




};
