// Default Parameter Values
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(`sum: ${sum()}`);
console.log(`sum(1): ${sum(1)}`);
console.log(`sum(1, 2): ${sum(1, 2)}`);

// Default Parameter Values as Expression
function subtraction(x = 0, y = Math.random()) {
  return x - y;
}

console.log(`subtraction: ${subtraction()}`);

// Rest Parameter
function f(x, y, ...others) {
  return (x + y) * others.length;
}

console.log(`f(1, 2, 'hello', true, 7): ${f(1, 2, 'hello', true, 7)}`); // 9

// Spread Operator
const params = ['hello', true, 7];
const others = [1, 2, ...params]; // [1, 2, 'hello', true, 7]

console.log(`f(1, 2, ...params): ${f(1, 2, ...params)}`); // 9

const str = 'foo';
const chars = [...str]; // ['f', 'o', 'o'] ~ Array.from(str); ~ str.split('')

function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(val) {
    return multiplier * val;
  });
}

console.log(multiply(2, 1, 2, 3));
