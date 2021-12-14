import { dataBingo, dataBoards } from './data';

const bingoNumbers = dataBingo;
const boards: number[][] = dataBoards;
const boardsMarked: string[][] = [];
const mark = 'X';
const rowIndexes = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];
const columnIndexes = [
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24]
];
let winningBoard: number[] = [];
let markedBoard: string[] = [];
let lastNumber: number;

dataBoards.forEach(board => {
  boardsMarked.push(new Array(board.length));
});

lastNumber = bingoNumbers.find(bingoNumber => {
  winningBoard = boards.find((board, boardIndex) => {
    return board.find((numberOnBoard, bingoIndex) => {
      if (numberOnBoard === bingoNumber) {
        markedBoard = boardsMarked[boardIndex];
        markedBoard[bingoIndex] = mark;
        return isThereABingo(markedBoard);
      } else { 
        return false;
      }
    });
  }) as number[]; // we're pretty sure there is a bingo after all numbers are drawn
  return winningBoard;
}) as number;

function isThereABingo(board: string[]) {
  return rowIndexes.find(row => findLine(row, board)) || columnIndexes.find(column => findLine(column, board))
}

function findLine(line: number[], board: string[]) {
  return line.every(position => board[position] === mark);
}

if (lastNumber) {
  let sum = 0;
  winningBoard.forEach((hit, index) => {
    if (markedBoard[index] != mark) {
      sum += winningBoard[index];
    }
  });

  console.log('winningBoard', winningBoard);
  console.log('markedBoard', markedBoard);
  console.log('lastNumber', lastNumber);
  console.log('sum of unmarked numbers on board * last drawn number =', sum * lastNumber);
}