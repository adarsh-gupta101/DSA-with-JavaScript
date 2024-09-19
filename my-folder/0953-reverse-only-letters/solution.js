var reverseOnlyLetters = function (as = 'ab-cd') {
    let arr = as.split('');
    let start = 0;
    let end = arr.length - 1;

    function isLetter(c) {
        let code = c.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    while (start < end) {
        while (start < end && !isLetter(arr[start])) {
            start++;
        }
        while (start < end && !isLetter(arr[end])) {
            end--;
        }
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join('');
};
