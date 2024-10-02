/**
 * @param {number} n
 * @return {string[]}
 */

function isValid(pattern) {
    let stack = [];

    for (let i = 0; i < pattern.length; i++) {
        if (stack[0] == '(' && pattern[i] == ')') {
            stack.shift();
        } else {
            stack.unshift(pattern[i]);
        }
    }
    return stack.length == 0;
}

var generateParenthesis = function (n) {
    let result = [];

    function DFS(slate, index, open, close) {
        if (index == 2 * n) {
            // console.log(slate.join(""))
            if (isValid(slate)) {
                result.push(slate.slice().join(""));
            }
            return;
        }
        if (open <= n) {

            slate.push('(');
            DFS(slate, index + 1, open + 1, close);
            slate.pop();
        }
        if (close <= n) {

            slate.push(')');
            DFS(slate, index + 1, open, close + 1);
            slate.pop();
        }
    }
    DFS((slate = []), 0, 0, 0);

    return result;
};
