function doesLineContainNumber(line, number) {
    return line.includes(number);
}

function isListAValidSudokuLine(line) {
    for (let number = 1; number <= 9; number++) {
        if (!doesLineContainNumber(line, number)) {
            return false;
        }
    }
    return true;
}

function doesFirstColumnContainAllNumbers(sudoku) {
    firstColumn = [];
    for (line of sudoku) {
        firstColumn.push(line[0]);
    }

    return isListAValidSudokuLine(firstColumn)
}


module.exports = {
    doesLineContainNumber,
    isListAValidSudokuLine,
    doesFirstColumnContainAllNumbers
}