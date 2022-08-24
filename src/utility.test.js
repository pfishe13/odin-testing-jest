import { capitalize, reverseString, calculator } from './utility';

// Capitilize
it('First letter is capitilized', () => {
  expect(capitalize('letter')).toBe('Letter');
});

it('Capitilize empty string', () => {
  expect(capitalize('')).toBe('');
});

// reverseString
it('Reverse string', () => {
  expect(reverseString('reverse')).toBe('esrever');
});

it('Reverse string with empty string', () => {
  expect(reverseString('')).toBe('');
});

// calculator
it('Add zeros with calculator', () => {
  expect(calculator.add(0, 0)).toBe(0);
});

it('Add positives with calculator', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

it('Add negative with positive with calculator', () => {
  expect(calculator.add(-4, 2)).toBe(-2);
});

it('Subtract positives with calculator', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

it('Subtract negative from positive with calculator', () => {
  expect(calculator.subtract(5, -2)).toBe(7);
});

it('Multiply positives with calculator', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

it('Multiply negative and positive with calculator', () => {
  expect(calculator.multiply(-4, 2)).toBe(-8);
});

it('Divide by 0 with calculator', () => {
  expect(calculator.divide(2, 0)).toBe('Error');
});

it('Divide negative and positive with calculator', () => {
  expect(calculator.divide(-4, 2)).toBe(-2);
});

// // caesarCipher

// // analyzeArray
// it('Return object of numbers', () => {
//   expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe(
//     object ==
//       {
//         average: 4,
//         min: 1,
//         max: 8,
//         length: 6,
//       }
//   );
// });
