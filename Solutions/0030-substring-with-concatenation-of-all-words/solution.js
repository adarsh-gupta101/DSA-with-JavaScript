/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let windowLength = words.join("").length
    let wordLendth = words[0].length;
    let numofWords=words.length


    let wordFrequency = {}
    for (let word of words) {
        wordFrequency[word] = (wordFrequency[word] | 0) + 1
    }
    result=[]

    for (end = 0; end <= s.length - windowLength; end++) {
        let currentFoundWordLength = 0;
        let Seenwords = {}

        while (currentFoundWordLength <numofWords) {
            let start = end + currentFoundWordLength * wordLendth
            let wordweneed = s.substr(start, wordLendth)
            if (!wordFrequency[wordweneed]) break

            Seenwords[wordweneed] = (Seenwords[wordweneed] | 0) + 1
            if(Seenwords[wordweneed]>wordFrequency[wordweneed]) break
            currentFoundWordLength++
        }
        if(currentFoundWordLength==numofWords){
            result.push(end)
        }
    }
    return result
};
