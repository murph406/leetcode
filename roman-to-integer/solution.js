/*

Given a roman numeral, convert it to an integer.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

/**
 * @param {string}
 * @return {number}
 */


 const Romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

var romanToInt = function (roman) {
    const carArr = roman.split('')
    let sum = 0

    console.log('\n', "ROMAN::", roman)
    console.log('\n', "CHARACTER_ARRAY::", carArr)

    for (var i = 0; i < carArr.length; i++) {
        const currRoman = Romans[carArr[i]]
        const nextRoman = Romans[carArr[i + 1]]

        if (currRoman >= nextRoman || nextRoman === undefined) {
            sum = sum + currRoman

        } else {
            sum = sum + (nextRoman - currRoman)
            i++
        }
        console.log("CURR::", currRoman, " NEXT::", nextRoman, " CURR_SUM::", sum)
    }

    return sum
};

const roman = "LVIII"
// const roman = "MCMXCIV"
// const roman = "III"
const num = romanToInt(roman)

console.log("FOUND INT::", num)