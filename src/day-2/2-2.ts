import {INPUT} from "./data";
import {Command} from '../models/command.model';

const commands: Command[] = INPUT;
const startPosition = 0;
const startDepth = 0;
const startAim = 0;
let position = startPosition;
let depth = startDepth;
let aim = startAim;

commands.forEach((command: Command) => {
  switch (command.direction) {
    case 'forward':
      position += command.amount;
      depth += aim * command.amount;
      break;

    case 'up':
      aim -= command.amount;
      break;

    case 'down':
      aim += command.amount;
      break;
  }
});

console.log('position:', position);
console.log('depth:', depth);
console.log('position * depth = ', position * depth);