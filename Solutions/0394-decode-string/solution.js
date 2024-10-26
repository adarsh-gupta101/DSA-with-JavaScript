/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {


    let string = []

    for (let i = 0; i < s.length; i++) {

        if (s[i] != "]") {
            string.push(s[i])
        } else {

            let str = ""
            while (string[string.length - 1] != "[") {
                str = string.pop() + str
            }
            string.pop()

            let number = ""
            while (string.length > 0 && !isNaN(string[string.length-1])) {
                number = (string.pop()) + number

            }

            string.push(str.repeat(Number(number)))


        }
    }

return string.join("")
};
