console.log('# == Set');
let set = new Set();
let key = {};

set.add(key);
console.log(set.size);

key = null;

console.log(`--- ${set.size}`);
console.log(key);

key = [...set][0];
console.log(key);

// ======================================================
console.log('# == WeakSet');
let weakSet = new WeakSet();
let key1 = {};

weakSet.add(key1);
console.log(weakSet.has(key1));

weakSet.delete(key1);
console.log(weakSet.has(key1));

let key11 = {};
let key22 = {};
let anotherWeakSet = new WeakSet([key11, key22]);

console.log(anotherWeakSet.has(key11));
console.log(anotherWeakSet.has(key22));
