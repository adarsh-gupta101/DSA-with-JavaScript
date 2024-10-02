/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let permutations = [];

    function DFS(index, slate) {
        if (index == s.length) {
            permutations.push(slate.join(''));
            return;
        }

        if (/[a-zA-Z]/.test(s[index])) {
            slate[index] = s[index].toUpperCase();
            DFS(index + 1, slate);

            slate[index] = s[index].toLowerCase();
            // console.log({ slate });
            DFS(index + 1, slate);
        } else {
            // slate[index]=slate[index]
            DFS(index + 1, slate);
        }
    }

    DFS((index = 0), (slate = s.split('')));

    return permutations;
};

// letterCasePermutation('a1b2');

