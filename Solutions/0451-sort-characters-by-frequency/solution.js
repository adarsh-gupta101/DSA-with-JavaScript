/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {


    let heap = new MaxPriorityQueue()

    let hash = {}

    for (let i of s) {
        hash[i] = (hash[i] || 0) + 1
    }

    for(let i in hash){
        heap.enqueue(i,hash[i])
    }

    let result=[]
    while(heap.size()>0){

       let element=heap.dequeue()
       for(let j=0;j<element.priority;j++){
        result.push(element.element)
       }
    //    console.log(element)

    }

    return result.join("")

};
