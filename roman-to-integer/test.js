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
};

const roman = "LVIII"
// const roman = "MCMXCIV"
// const roman = "III"
const num = romanToInt(roman)

console.log("FOUND INT::", num)