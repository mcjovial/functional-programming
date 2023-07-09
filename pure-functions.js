// Pure function that calculates the square of a number
function square(x) {
  return x * x;
}

// Impure function that modifies external state
let counter = 0;
function increment() {
  counter++;
}
