/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */


 const transpose = function (matrix) {
    let resultMatrix = Array.from({ length: matrix[0].length }, () => Array.from({ length: matrix.length}, () => []))

    console.log('\n', "INPUT_MATRIX::", matrix)
    console.log( "RESULT_MATRIX::", resultMatrix)

    for (var r = 0; r < matrix.length; r++) {
        for(var c = 0; c < matrix[r].length; c++) {
            resultMatrix[c][r] = matrix[r][c]
        }
    }

    return resultMatrix
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const matrix = [[1, 2, 3], [4, 5, 6]]

const transposedMatrix = transpose(matrix)

console.log('\n', "TRANSPOSED_MATRIX::", transposedMatrix)