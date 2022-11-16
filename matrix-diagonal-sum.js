/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */


/**
 * @param {number[][]} matrix
 * @return {number}
 */


const diagonalSum = function (matrix) {
    let sum = 0

    for (var i = 0; i < matrix.length; i++) {
        if (i === matrix[i].length - 1 - i) {
            sum += matrix[i][i]
        } else {
            sum += matrix[i][i]
            sum += matrix[i][matrix[i].length - 1 - i]
        }
    }

    return sum
};


// const matrix = [[5]]
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// const matrix = [
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1]
// ]

const sum = diagonalSum(matrix)
console.log("SUM::", sum)
