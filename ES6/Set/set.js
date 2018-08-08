let set = new Set();
let key1 = {},
    key2 = {};

set.add(key1);
set.add(key2);

set.add(5);
set.add('5');
set.add(5);

console.log(set.size);


// =========================
let mySet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7]);
console.log(mySet.has(1));
console.log(mySet.has(8));


mySet.delete(5);
console.log('Does 5 exist: ', mySet.has(5));

console.log(mySet.size);

mySet.clear();
console.log(`After clearing: ${mySet.size}`);

// =========================
let anotherSet = new Set([4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8]);

anotherSet.forEach(function(value1, value2) {
  console.log(`${value1} - ${value2}`);
});

let myArray = [...anotherSet];
console.log(myArray);
