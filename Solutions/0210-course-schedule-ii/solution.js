/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let map = new Map();

    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        map.set(prerequisites[i][0], [
            ...map.get(prerequisites[i][0]),
            prerequisites[i][1],
        ]);
    }
    // console.log(Array.from(map.entries()));
    let visited = new Set();
    let completed = new Set();
    function DFS(current) {
        if (visited.has(current)) {
            return false;
        }
        if (completed.has(current)) {
            // console.log(slate);
            return;
        }

        visited.add(current);

        for (let cor of map.get(current)) {
          if(DFS(cor)==false){
                // console.log("loop")
                return false
            }
        }
        visited.delete(current);
        completed.add(current);
    }

    for (let i = 0; i < numCourses; i++) {
        if(DFS(i)==false){
            return []
        };
    } 
    return (Array.from(completed))
};
