/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function (n, rides) {

    rides.sort((a, b) => a[0] - b[0]);

    const cache = new Map();

    function binarySearch(end) {

        let start = 0; let finish = rides.length - 1

        while (start <= finish) {

            let mid = start + Math.floor((finish - start) / 2)
            // console.log(rides[mid],mid)
            // if (rides[mid][0] == end) {
            //     return mid
            // } else if (rides[mid][0] < end) {
            //     start = mid + 1
            // } else {
            //     finish = mid - 1
            // }


            if (rides[mid][0] >= end) {
                finish = mid - 1
            } else {
                start = mid + 1
            }
        }

        return start
    }


    function DFS(index) {
        if (index >= rides.length) {
            return 0
        }

        if (cache.has(index)) {
            return cache.get(index);
        }


        const [start, end, tip] = rides[index]


        let data = binarySearch(end)

        const result = Math.max(DFS(index + 1), DFS(data) + end - start + tip)
        cache.set(index, result)

        return result
    }

    let data = DFS(0)
    // console.log(data)
    return data

};
