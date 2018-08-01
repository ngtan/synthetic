const reflect = value => value;
var reflectSame = function reflectSame(value) {
  return value;
};

const sum = (a, b) => (a + b);
var sumSame = function sumSame(a, b) {
  return a + b;
};

const getName = () => 'name';
var getNameSame = function getNameSame() {
  return 'name';
};

const doNothing = () => {};
var doNothingSame = function doNothingSame() {};

const getItem = () => ({ name: 'item' });
var getItemSame = function getItemSame() {
  return {
    name: 'item',
  };
};

const values = [5, 1, 7, 4, 3, 5, 1];
const sortedValues = values.sort((a, b) => (a - b));
console.log(values);
