var b = 1;
b = 2;
console.log('b', b);

let a = 1;
a = 2;
console.log('a', a);

const c = 1;
try {
  c = 2;
} catch (error) {
  console.log('Ошибка TypeError');
}
