import {INPUT} from "./2-1.data";
import {Command} from '../models/command.model';

const commands: Command[] = INPUT;
const startPosition = 0;
const startDepth = 0;
let position = startPosition;
let depth = startDepth;

commands.forEach((command: Command) => {
  switch (command.direction) {
    case 'forward':
      position += command.amount;
      break;

    case 'up':
      depth -= command.amount;
      break;

    case 'down':
      depth += command.amount;
      break;
  }
});

console.log('position:', position);
console.log('depth:', depth);
console.log('position * depth = ', position * depth);