/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    word1 = word1.split('');
    word2 = word2.split('');


    let stack = [];
    while (word1.length!=0 &&  word2.length!=0) {
        stack.push(word1.shift());
        stack.push(word2.shift());
       
    }

  while (word1.length) {
        stack.push(word1.shift());
    }
    while (word2.length) {
        stack.push(word2.shift());
    }

    return stack.join('');
};


