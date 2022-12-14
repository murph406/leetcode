/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/


/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function (x) {
    const numString = x.toString()
    const charArr = numString.split('')
    const reverseCharArr = charArr.slice().reverse()

    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] !== reverseCharArr[i]) {
            return false
        }
    }


    return true
};

const num = 121
const bool = isPalindrome(num)

console.log("Is num palindrome::", bool)