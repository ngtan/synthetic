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
