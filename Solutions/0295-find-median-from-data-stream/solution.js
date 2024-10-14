
var MedianFinder = function () {
    this.minHeap = new MinPriorityQueue()
    this.maxHeap = new MaxPriorityQueue()


};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {

    if (this.maxHeap.size() == 0 || this.maxHeap.front().element >= num) {
        this.maxHeap.enqueue(num,num)
    } else {
        this.minHeap.enqueue(num,num)
    }

    //length condigtion

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue().element)
    } else if (this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size() == this.minHeap.size()) {
        return (this.maxHeap.front().element + this.minHeap.front().element) / 2
    }

    return this.maxHeap.front().element

};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
