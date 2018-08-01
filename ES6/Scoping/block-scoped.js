// =====================================================================================
function hello(name, age) {
  if (age > 18) {
    let msg = `Hello, ${name}. You're older than 18 years old.`;
    console.log(msg);
  } else {
    let msg = `Hello, ${name}. You're younger than 18 years old.`;
    console.log(msg);
  }

  // console.log(msg); // msg is not defined.
}

console.log('# hello');
hello('scope-1', 19);
hello('scope-2', 17);

// =====================================================================================

function sayHello(name, age) {
  let msg;

  if (age > 18) {
    msg = `Hello, ${name}. You're older than 18 years old.`;
  } else {
    msg = `Hello, ${name}. You're younger than 18 years old.`;
  }
  console.log(msg);
}

console.log('# sayHello');
sayHello('scope-1', 19);
sayHello('scope-2', 17);


// =====================================================================================
for (var i = 0; i < 10; i += 1) {
  // console.log(i);
}
// i is still accessable here
console.log(i); // 10

for (let j = 0; j < 10; j += 1) {
  // console.log(j);
}
// j isn't accessable here
// console.log(j); // j isn't defined

// =====================================================================================

var num = 10;
num = 15;
console.log(num);

const number = 10;
// number = 15; // can't assign a new value to constant variable
console.log(number);

// =====================================================================================

const funcs = [];
// Functions in loops
for (var i = 0; i < 10; i += 1) {
  //  method 1 - give it a try
  funcs.push(function(value) { // IIFE: intermedialy invoked function expression
    return function() {
      console.log(value);
    };
  }(i));

  // method 2 - give it a try
  // funcs.push(function() {
  //   console.log(i);
  // });
}

funcs.forEach(function(func) {
  func();
});

const funcs2 = [];
for (let i = 0; i < 10; i += 1) {
  funcs2.push(function() {
    console.log(i);
  });
}

funcs2.forEach(function(func) {
  func();
});

// =====================================================================================

