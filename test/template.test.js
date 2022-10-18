const {
    doesRowContainNumber,
    isRowAValidSudokuRow
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
});