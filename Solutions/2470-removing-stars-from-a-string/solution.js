/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = [];

    for (let char of s) {
        if (char == '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};

removeStars((s = 'leet**cod*e'));

