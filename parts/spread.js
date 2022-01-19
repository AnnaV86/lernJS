// const a = [1, 2];
// const b = [3, 4];

// console.log('no spread', [a, b]);
// console.log('b spread', [a, ...b]);
// console.log('a,b spread', [...a, ...b]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log('math max numbers', Math.max(...numbers));

// const obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     v: 5,
//   },
//   g: 6,
// };

// const obj2 = {
//   g: 4,
//   e: 5,
// };
// // создание новых хранилищ примитивов, прошлые объекты не будут изменены.
// console.log('obj spread', { ...obj, ...obj2 });
// console.log('obj spread', { ...obj2, ...obj });
// const obj3 = { ...obj, ...obj2, g: 7 };
// console.log('obj spread add g 7', obj3);
// console.log('obj change d = 4');
// console.log((obj.g = 100));
// console.log(obj);

// const obj4 = { a: 1, b: 2 };

// const obj5 = { ...obj4, a: 3 };
// console.log(obj5);

const spreadParameter = (a, b, ...spreadParam) => spreadParam.concat(a + b);

console.log(spreadParameter(1, 2, 5, 6, 7));
