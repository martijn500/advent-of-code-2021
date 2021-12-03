import { INPUT } from './data';

const bitLength = INPUT[0].length;
const positions: string[][] = [];
const gammaBits = [];
const epsilonBits = [];

for(let i = 0; i < bitLength; i++) {
  positions[i] = [];
}

INPUT.forEach((bit: string) => {
  for(let i = 0; i < bitLength; i++) {
    positions[i].push(bit[i]);
  }
});

for(let i = 0; i < bitLength; i++) {
   gammaBits[i] = returnZeroOrOne(positions[i]);
   epsilonBits[i] = gammaBits[i] === '1' ? '0' : '1';
}

const gammaRate = parseInt(gammaBits.join(''), 2);
const epsilonRate = parseInt(epsilonBits.join(''), 2);

function returnZeroOrOne(listOfOnesAndZeroes: string[]) {
  return listOfOnesAndZeroes.filter(oneOrZero => oneOrZero === '1').length > INPUT.length/2 ? '1' : '0'
}


console.log('Gamma Rate: ', gammaRate);
console.log('Epsilon Rate: ', epsilonRate);
console.log('Multiplied: ', gammaRate * epsilonRate)

