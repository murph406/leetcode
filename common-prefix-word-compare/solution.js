/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

/**
 * @param {string[]} strs
 * @return {string}
 */



function compareStrings(str1, str2) {
    let result = ""
    const str1Array = str1.split('')
    const str2Array = str2.split('')
    const stringLength = Math.min(str1Array.length, str2.length)

    for (var i = 0; i < stringLength; i++) {
        if (str1Array[i] !== str2Array[i]) break
        result += String(str1Array[i])
    }

    return result
}

var longestCommonPrefix = function (array) {
    let prefix = array[0]

    for (var i = 1; i < array.length; i++) {
        prefix = compareStrings(prefix, array[i])
    }

    return prefix
};

// const arrayOfStrings = ["fliwer", "fliw", "flight"]
const arrayOfStrings = ["floweeer", "flow", "flight"]
const commonPrefix = longestCommonPrefix(arrayOfStrings)

console.log("PREFIX::", commonPrefix)
