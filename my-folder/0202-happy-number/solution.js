/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n=19) {
    while (n >= 1) {
        if (n == 1 || n==7) {
            return true;
        }

        if (n < 10) {
            return false;
        }

        let num = n;
        let square = 0;
        while (num > 0) {
            let dig = num % 10;
            square = square + dig * dig;
            // console.log(square)
            num = Math.floor(num / 10);
        }
        n = square;

    }
    
};

console.log(isHappy())

