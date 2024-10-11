/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {





    let map = new Map()
    for (let i = 0; i < numCourses; i++) {

        map.set(i, [])
    }

    for (let i = 0; i < prerequisites.length; i++) {
        map.set(prerequisites[i][0], [...map.get(prerequisites[i][0]), prerequisites[i][1]])
    }



    let visited = new Set()
    let finsihed = new Set()
    function DFS(currentCourse) {

        if (visited.has(currentCourse)) return false
        if (finsihed.has(currentCourse)) return true

        visited.add(currentCourse)
        // console.log(map.get(currentCourse), currentCourse)
        for (let i of map.get(currentCourse)) {
            // console.log(i)
            if (!DFS(i)) {
                return false
            }
        }

        visited.delete(currentCourse)
        finsihed.add(currentCourse)

        return true

    }


    for (let i = 0; i < numCourses; i++) {
        if (!DFS(i)) {
            return false
        }
    }

    return true

};
