/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let actual= [...colors,...colors.slice(0,2)];

    let start=0;
    let count=0;

    for(let end=1;end<actual.length;end++){
        if(actual[end-1]==actual[end+1]){
            if(actual[end-1]!=actual[end]){
                count++
            }
        }

    }

    return count;

};
