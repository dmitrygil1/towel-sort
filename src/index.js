module.exports = function towelSort (matrix) {if (matrix) {matrix.map((elem, ind) => {if (ind % 2) {elem.reverse()}}) return matrix.flat();} else { return []; }}
