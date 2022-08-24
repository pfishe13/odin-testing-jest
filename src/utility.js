// A capitalize function that takes a string and returns it with the first character capitalized.
const capitalize = (input) => {
  input = input.charAt(0).toUpperCase() + input.slice(1);
  return input;
};

const reverseString = (input) => {
  let output = '';
  for (let i = input.length - 1; i >= 0; i -= 1) {
    output += input[i];
  }
  return output;
};

// Calculator
const areValidNumbers = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  return true;
};
const add = (x, y) => {
  if (areValidNumbers(x, y)) {
    return x + y;
  } else {
    return 'NaN';
  }
};

const subtract = (x, y) => {
  if (areValidNumbers(x, y)) {
    return x - y;
  } else {
    return 'NaN';
  }
};

const multiply = (x, y) => {
  if (areValidNumbers(x, y)) {
    return x * y;
  } else {
    return 'NaN';
  }
};

const divide = (x, y) => {
  if (y === 0) return 'Error';
  if (areValidNumbers(x, y)) {
    return x / y;
  } else {
    return 'NaN';
  }
};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

// Analyze Array
const analyzeArray = (array) => {
  let sum = 0;
  let count = 0;
  for (let element of array) {
    sum += element;
    count += 1;
  }
  let average = sum / count;

  array.sort();
  let min = array[0];
  let max = array[array.length - 1];
  let length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
};

export { capitalize, reverseString, calculator, analyzeArray };
// module.exports = capString;
