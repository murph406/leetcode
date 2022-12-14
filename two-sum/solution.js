/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    console.log('\n', "NUMS::", nums, " ", "TARGET::", target, '\n')
    
    for (var i = 0; i < nums.length; i++) {
        for (var e = i + 1; e < nums.length; e++) {
            if (nums[i] + nums[e] === target) {
                return [i, e]
            }
        }
    }

    return []
};


const arrayOfNums = [-1, -2, -3, -4, -5]
const targetNum = -3

const solution = twoSum(arrayOfNums, targetNum)

console.log("SOLUTION::", solution)