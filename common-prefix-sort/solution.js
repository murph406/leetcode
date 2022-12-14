/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

/**
 * @param {string[]} strs
 * @return {string}
 */

 function reverseSort(a, b) {
    if (a > b) return -1
    if (a < b) return 1
    if (a === b) return 0
}

var longestCommonPrefix = function (array) {
    const size = array.length

    if (size == 0)
        return "";

    if (size == 1)
        return array[0];

    array.sort()
    const end = Math.min(array[0].length, array[size - 1].length);

    console.log("\n", array)

    let i = 0;
    while (i < end && array[0][i] == array[size - 1][i])
        i++;

    let pre = array[0].substring(0, i);
    return pre;
};

// const arrayOfStrings = ["flower", "a", "z", "flow", "flight"]
const arrayOfStrings = ["flower", "flow", "flight"]
const commonPrefix = longestCommonPrefix(arrayOfStrings)

console.log("PREFIX::", commonPrefix)
