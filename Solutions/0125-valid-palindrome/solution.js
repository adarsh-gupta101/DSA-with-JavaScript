/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = []
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
            str.push(s[i].toLowerCase());
        }
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            str.push(s[i].toLowerCase());
        }
         if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
            str.push(s[i].toLowerCase());
        }
    }

    let start = 0; let end = str.length - 1
    while (start <= end && start<s.length-1 && end>-1) {
        if(str[start]!=str[end]){
            return false
        }
        start++
        end--
    }
return true
};
