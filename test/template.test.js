const {
    doesRowContainNumber,
    isRowAValidSudokuRow,
    doesFirstColumnContainAllNumbers
} = require('../src/template');

describe('This is a test suite for the sudoku checker', () => {
    describe('Does a row contain a certain number?', () => {
        it('[1,2,3,4,5,6,7,8,9] contains a 1', () => {
            expect(doesRowContainNumber([1,2,3,4,5,6,7,8,9], 1)).toEqual(true);
        });
        it('[2,3,4,5,5,6,7,8,9] does not contain a 1', () => {
            expect(doesRowContainNumber([2,3,4,5,5,6,7,8,9], 1)).toEqual(false);
        });
        it('[1,2,3,4,6,7,8,9,9] does not contain a 5', () => {
            expect(doesRowContainNumber([1,2,3,4,6,7,8,9,9], 5)).toEqual(false);
        });
    });
    describe('Does a row contain all numbers 1-9?', () => {
        it('[1,2,3,4,5,6,7,8,9] contains all numbers', () => {
            expect(isRowAValidSudokuRow([1,2,3,4,5,6,7,8,9])).toEqual(true);
        });
        it('[1,1,2,3,4,5,6,7,8] does not contain all numbers', () => {
            expect(isRowAValidSudokuRow([1,1,2,3,4,5,6,7,8])).toEqual(false);
        });
        it('[1,2,3,4,6,7,8,9,9] does not contain all numbers', () => {
            expect(isRowAValidSudokuRow([1,2,3,4,6,7,8,9,9])).toEqual(false);
        });
    });
    describe('Does the first column contain all numbers 1-9?', () => {
        it('Correct Sudoku contains all numbers', () => {
            expect(doesFirstColumnContainAllNumbers([
                [5,3,4,6,7,8,9,1,2],
                [6,7,2,1,9,5,3,4,8],
                [1,9,8,3,4,2,5,6,7],
                [8,5,9,7,6,1,4,2,3],
                [4,2,6,8,5,3,7,9,1],
                [7,1,3,9,2,4,8,5,6],
                [9,6,1,5,3,7,2,8,4],
                [2,8,7,4,1,9,6,3,5],
                [3,4,5,2,8,6,1,7,9]
                ])).toEqual(true);
        });
            });
});