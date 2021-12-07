import { INPUT } from './data';
import { cloneDeep } from 'lodash';

let input = cloneDeep(INPUT);
let anotherInput = cloneDeep(INPUT);

const oxygenRating = parseInt(getSurvivingBitString(input, getMostCommonBit), 2);
const co2Rating = parseInt(getSurvivingBitString(anotherInput, getLeastCommonBit), 2);

function getSurvivingBitString(bits: string[], filterMethod: Function): string {
  const inputLength = INPUT[0].length;
  const positions: string[][] = [];
  for(let i = 0; i < inputLength; i++) {
    if (bits.length === 1) break;
    positions[i] = [];
    bits.forEach((bit: string) => {
      positions[i].push(bit[i]);
    });
    const commonBit = filterMethod(bits.length / 2, positions[i]);

    bits = bits.filter(bit => {
      return (commonBit === '0' && bit[i] === '0' || commonBit === '1' && bit[i] === '1');
    });
  }
  return bits[0];
}

function getMostCommonBit(minimalNoOfHits: number, listOfOnesAndZeroes: string[]): string {
  return listOfOnesAndZeroes.filter(oneOrZero => oneOrZero === '1').length >= minimalNoOfHits ? '1' : '0'
}
function getLeastCommonBit(minimalNoOfHits: number, listOfOnesAndZeroes: string[]): string {
  return listOfOnesAndZeroes.filter(oneOrZero => oneOrZero === '0').length <= minimalNoOfHits ? '0' : '1'
}

console.log('oxygenRating', oxygenRating)
console.log('co2Rating', co2Rating); 
console.log('oxygenRating * co2Rating =', oxygenRating * co2Rating);
