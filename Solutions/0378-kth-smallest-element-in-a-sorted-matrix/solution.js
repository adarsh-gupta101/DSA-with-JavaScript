/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {


    let heap = new MinPriorityQueue({ priority: (x) => x.element })

    for (let i = 0; i < matrix.length; i++) {
        let value = matrix[i].shift()
        heap.enqueue({ element: value, order: i })
    }


    let numberCount = 0, number = 0

    while (heap.size() > 0) {
        let data = heap.dequeue()
        number = data.element.element;
        numberCount++
        if (numberCount == k) {
            // return element
            break
        }
        // console.log(data.)
        // console.log("matrix order",data)
        if (matrix[data.element.order].length > 0) {
            let value= matrix[data.element.order].shift()
            heap.enqueue({ element:value, order: data.element.order })
        }


    }
    // console.log(element)
    return number
};
