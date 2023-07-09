// Using reduce to calculate the sum of numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Using map and filter together
const evenSquaredNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);
