type Direction = 'forward' | 'up' | 'down';

export interface Command {
  direction: Direction;
  amount: number;
};
