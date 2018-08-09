let colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i += 1) {
  console.log(colors[i]);
}

function createIterator(items) {
  let i = 0;

  return {
    next: function() {
      let done = (i >= items.length);
      let value = !done ? items[i++] : undefined;

      return {
        done,
        value,
      };
    }
  };
}

let iterator = createIterator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// ================================
let values = [1, 2, 3];

for (let num of values) {
  console.log(num);
}

let anotherIterator = values[Symbol.iterator]();

console.log(anotherIterator.next());
console.log(anotherIterator.next());
console.log(anotherIterator.next());
console.log(anotherIterator.next());

function isIterable(object) {
  return typeof object[Symbol.iterator] === 'function';
}

console.log(isIterable([1, 2, 3]));

let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
  console.log(x);
}

// ================================

function *createIterator() {
  let first = yield 1;
  let second;
  try {
    second = yield first + 2;
  } catch (error) {
    second = 4;
  }
  yield second + 3;
}

let iterator1 = createIterator();

console.log(iterator1.next());
console.log(iterator1.next(4));
console.log(iterator1.next(5));
console.log(iterator1.next());

let iterator2 = createIterator();
console.log(iterator2.next());
console.log(iterator2.next(4));
console.log(iterator2.throw(new Error('Opps')));
console.log(iterator2.next());

// ================================
function *createIterator2() {
  yield 1;
  return;
  yield 2;
  yield 3;
}

let iterator3 = createIterator2();

console.log(iterator3.next());


// ================================
function *createNumberIterator() {
  yield 1;
  yield 2;
}

function *createColorIterator() {
  yield 'black';
  yield 'white';
}

function *createCombinedIterator() {
  yield *createNumberIterator();
  yield *createColorIterator();
  yield 'createCombinedIterator';
}

let combinedIterator = createCombinedIterator();
console.log(combinedIterator.next());
console.log(combinedIterator.next());
console.log(combinedIterator.next());
console.log(combinedIterator.next());
console.log(combinedIterator.next());
console.log(combinedIterator.next());
