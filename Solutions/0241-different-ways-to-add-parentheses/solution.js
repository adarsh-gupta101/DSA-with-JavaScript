/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {




    // we have to slipt at every * - +



    let result = []


    if (!(expression.includes("*")) && !(expression.includes("+")) && !(expression.includes("-"))) {

        result.push(Number(expression))
    } else {



        for (let i = 0; i < expression.length; i++) {

            let char = expression[i]

            if (isNaN(parseInt(char))) {

                let leftpart = diffWaysToCompute(expression.substring(0, i))
                let rightpart = diffWaysToCompute(expression.substring(i + 1)
                )


                for (let l = 0; l < leftpart.length; l++) {
                    for (let r = 0; r < rightpart.length; r++) {

                        let left = leftpart[l]
                        let right = rightpart[r]

                        if (char == "+") {
                             result.push(left + right)
                        } else if (char == "*") {
                             result.push(left * right)
                        } else {
                             result.push(left - right)
                        }
                    }
                }
            }

        }

        return result

    }

    return result

};
