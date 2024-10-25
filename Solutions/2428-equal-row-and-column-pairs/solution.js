/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {


    let rowMap = {}, colMap = {}

    for (let i = 0; i < grid.length; i++) {

        rowMap[grid[i]] = (rowMap[grid[i]] || 0) + 1
    }

    for (let col = 0; col < grid[0].length; col++) {
        let colArray = []

        for (let row = 0; row < grid.length; row++) {
            colArray.push(grid[row][col])
        }

        colMap[colArray] = (colMap[colArray] || 0) + 1

    }

    let count=0

        for(let row in rowMap){

            let data=0
            if(row in colMap){

                data=rowMap[row]* colMap[row]

            }
            count+=data
        }

        return count

};
