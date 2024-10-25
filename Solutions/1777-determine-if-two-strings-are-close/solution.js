/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) {
        return false;
    }

    let hashSecond = {};
    let hashFirst = {};

    for (let i = 0; i < word2.length; i++) {
        hashSecond[word2[i]] = (hashSecond[word2[i]] || 0) + 1;
    }

    for (let j = 0; j < word1.length; j++) {
        hashFirst[word1[j] ]= (hashFirst[word1[j]] || 0) + 1;
    }


    if(Object.keys(hashSecond).sort().join("")!=Object.keys(hashFirst).sort().join("")){
        return false
    }

    let a1 = Object.values(hashFirst);
    let a2 = Object.values(hashSecond);

    
    console.log(a1,a2)
    
    a1.sort()
    a2.sort()
    
    for(let i=0;i<a1.length;i++){
        if(a1[i]!=a2[i]){
            return false
        }
    }
    
    return true
};
