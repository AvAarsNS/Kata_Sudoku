function doesRowContainNumber(row, number) {
    return row.includes(number);
}

function isRowAValidSudokuRow(row) {
    for (let number = 1; number <= 9; number++) {
        if (!doesRowContainNumber(row, number)) {
            return false;
        }
    }
    return true;
}

module.exports = {
    doesRowContainNumber,
    isRowAValidSudokuRow
}