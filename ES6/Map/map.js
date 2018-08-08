let map = new Map();

map.set('name', 'John');
map.set('year', 2018);

console.log(map.get('name'));
console.log(map.get('year'));


let key1 = {};
let key2 = {};

map.set(key1, 5);
map.set(key2, 10);

console.log(map.get(key1));
console.log(map.get(key2));

console.log(map.size);

let anotherMap = new Map([['name', 'John'], ['year', 2018], ['age', 1]]);

anotherMap.forEach(function(value, key) {
  console.log(`${key} -- ${value}`);
});
