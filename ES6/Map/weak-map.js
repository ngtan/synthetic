let key1 = {};
let key2 = {};
let weakMap = new WeakMap([[key1, 'John'], [key2, 2018]]);

console.log(weakMap.has(key1));
console.log(weakMap.has(key2));

console.log(weakMap.get(key1));
console.log(weakMap.get(key2));

weakMap.delete(key1);
console.log(weakMap.get(key1));
