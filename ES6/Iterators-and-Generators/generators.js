function *generator(items) {
  for (let i = 0; i < items.length; i += 1) {
    yield items[i];
  }
}

let iterator = generator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
