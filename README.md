# Kata Kata_Sudoku
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter.
If the board is valid return 'Finished!', otherwise return 'Try again!'

## Atomic behaviours

### Does a row contain a certain number?
[1,2,3,4,5,6,7,8,9] contains 1? -> true
[2,3,4,5,5,6,7,8,9] contains 1? -> false
[1,2,3,4,6,7,8,9,9] contains 5? -> false

### Does a row contain all numbers 1-9?
- [1,2,3,4,5,6,7,8,9] -> true
- [1,1,2,3,4,5,6,7,8] -> false
- [1,2,3,4,6,7,8,9,9] -> false