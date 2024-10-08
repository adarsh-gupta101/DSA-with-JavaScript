/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
   
    
    
    
    
    let result =[]
    
    
    for(let i=0;i<numRows;i++){
        let rows=new Array(i+1).fill(1)
        for(let j=1;j<i;j++){
            rows[j]=result[i-1][j-1]+result[i-1][j]
        }
        // console.log(rows)
        result.push(rows)
    }
    
    return result
};

// generate(5);

