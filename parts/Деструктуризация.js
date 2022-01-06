let a = 1;
let b = 2;
const arrNumber = [b, a];
[a, b] = arrNumber;

console.log(a);
console.log(b);

const arr = [1, 2, 3, 4];
const [one, two] = arr;
console.log('Array', one, two);

const obj = {
  name: 'Anna',
  age: 18,
  height: 162,
};

function objHandler({ height }) {
  return height;
}
console.log(objHandler(obj));
const { height, age } = obj;
console.log(height, age);

console.log([obj, obj, obj].map(({ age }) => age));
