import { dataBingo, dataBoards } from './data';

const bingoNumbers = dataBingo;
const boards: number[][] = dataBoards;
const boardsMarked: string[][] = [];
const winningBoards: number[] = [];
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
let lastWinningBoard: number[] = [];
let markedBoard: string[] = [];
let lastNumber = 0;

dataBoards.forEach(board => {
  boardsMarked.push(new Array(board.length));
});

for (let i = 0; winningBoards.length < 100; i++) {
  boards.forEach((board, boardIndex) => {
    return board.find((numberOnBoard, bingoIndex) => {
      if (numberOnBoard === bingoNumbers[i] && winningBoards.indexOf(boardIndex) === -1) {
        markedBoard = boardsMarked[boardIndex];
        markedBoard[bingoIndex] = mark;
        if (isThereABingo(markedBoard)) {
          lastNumber = bingoNumbers[i];
          lastWinningBoard = board;
          winningBoards.push(boardIndex);
        };
      }
    });
  });
}

function isThereABingo(board: string[]) {
  return rowIndexes.find(row => findLine(row, board)) || columnIndexes.find(column => findLine(column, board))
}

function findLine(line: number[], board: string[]) {
  return line.every(position => board[position] === mark);
}

let sum = 0;
lastWinningBoard.forEach((hit, index) => {
  if (markedBoard[index] != mark) {
    sum += lastWinningBoard[index];
  }
});

console.log('winningBoard', lastWinningBoard);
console.log('markedBoard', markedBoard);
console.log('lastNumber', lastNumber);
console.log('sum of unmarked numbers on board * last drawn number =', sum * lastNumber);
