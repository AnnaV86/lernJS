// клонирование объекта
// JSON
const arrJson = [1, 2, 3, 4];
const arrJson2 = JSON.parse(JSON.stringify(arrJson));
arrJson2.push(5);
console.log('JSON array', arrJson);
console.log('JSON array', arrJson2);

const objJson = {
    a: 1,
    b: 2,
};
const objJson2 = JSON.parse(JSON.stringify(objJson));
objJson2.c = 3;

console.log('JSON obj', objJson);
console.log('JSON obj', objJson2);

// Assign
// const arrAssign = [1, 2, 3, 4];
// const arrAssign2 = Object.entries({ ...arrAssign }).flat(1).filter((a) => typeof a === 'number');
// arrAssign2.push(5);
// console.log('Assign array', arrAssign);
// console.log('Assign array', arrAssign2);

// const objAssign = {
//     a: 1,
//     b: 2,
// };
// const objAssign2 = { ...objAssign };
// objAssign2.c = 3;

// console.log('Assign obj', objAssign);
// console.log('Assign obj', objAssign2);

// Spread
const arrSpread = [1, 2, 3, 4];
const arrSpread2 = [...arrSpread];
arrSpread2.push(5);
console.log('Spread array', arrSpread);
console.log('Spread array', arrSpread2);

const objSpread = {
    a: 1,
    b: 2,
};
const objSpread2 = { ...objSpread };
objSpread2.c = 3;

console.log('Spread obj', objSpread);
console.log('Spread obj', objSpread2);

// array
const arrArr = [-1, 1, 2, 3, 4];
const copyArr1 = arrArr.slice();
const copyArr2 = arrArr.map((el) => el);
copyArr1.push(5);
copyArr2.push(5);
console.log('Array', arrArr);
console.log('Array', copyArr1);
console.log('Array', copyArr2);

const first = [1, 2, 3, 4];
const cloneFirst = first.concat();
cloneFirst.push(5);
console.log('first', first);
console.log('clone first', cloneFirst);