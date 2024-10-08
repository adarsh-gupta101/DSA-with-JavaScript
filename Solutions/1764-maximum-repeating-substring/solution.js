/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let repeatCount = 0;
    let repeatedWord = word;
    
    while (sequence.includes(repeatedWord)) {
        repeatCount++;
        repeatedWord += word; // Concatenate word to itself
    }
    
    return repeatCount;
};
