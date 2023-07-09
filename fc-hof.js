// First-class function
const add = (a, b) => a + b;

// Higher-order function that takes a function as an argument
function performOperation(operation, a, b) {
  return operation(a, b);
}

const result = performOperation(add, 3, 4); // result = 7
