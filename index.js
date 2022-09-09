// let x;

// if (1 > 2) {
//   return (x = [2].length);
// } else {
//   x = '1'.length;
//   console.log('>>>', x);
//   return (x = '1'.length);
// }

// arrFirst = [1, 2, 3];

// arrSecond = [[8]].flat();

// newArr = [...arrFirst, ...arrSecond];

// newArr.push('4');

// newArr.reverse();

// console.log(Number.isFinite(123));

// function maxRot(n) {
//   const arrN = [...String(n)];
//   const arrResult = [];
//   const number = (n, count = 0, arrNew = []) => {
//     arrNew.push(n);
//     const newN = [...n.slice(0, count), ...n.slice(count + 1), n[count]];
//     return count === arrN.length - 1 ? arrNew : number(newN, ++count, arrNew);
//   };

//   arrResult.push(number(arrN));

//   const numberMax = arrResult[0]
//     .map((el) => Number(el.join('')))
//     .sort((a, b) => b - a)[0];

//   return numberMax;
// }

// console.log(maxRot(56789));
// console.log(maxRot(38458215));
// console.log(maxRot(19588103));
// console.log(maxRot(896219342));
// console.log(maxRot(6941830));

// function removeRotten(arr) {
//   return arr ? arr.map((x) => x.replace('rotten', '').toLowerCase()) : [];
// }

// console.log(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange']));
// console.log(removeRotten([]));
// console.log(removeRotten(['apple', 'rottenBanana', 'apple']));

// function strong(n) {
//   const number = [...String(n)]
//     .map((el) => [...Array(Number(el))].map((el, ind) => (el = ind + 1)))
//     .map((el) => el.reduce((acc, el) => acc * el, 1))
//     .reduce((acc, el) => acc + el, 0);
//   return number === n ? 'STRONG!!!!' : 'Not Strong !!';
// }

// console.log(strong(2));
// console.log(strong(145));
// console.log(strong(7));

// const spacer = (stringLength, textArr) => {
//   const arrLength = textArr.join('').length;
//   const textArrEl = textArr.length;
//   const lengthRemain = stringLength - arrLength;

//   if (textArrEl === 1) {
//     const smallString = textArr
//       .map((el) => `${el}${' '.repeat(lengthRemain)}`)
//       .join('');
//     return smallString;
//   }

//   const spiceCount = Math.floor(lengthRemain / (textArrEl - 1));
//   const remainsSpaces = lengthRemain % (textArrEl - 1);
//   const stringResult = textArr
//     .map((el, ind) => {
//       if (lengthRemain !== spiceCount * (textArrEl - 1)) {
//         const addSpice = lengthRemain - spiceCount * (textArrEl - 1);
//         return ind < addSpice ? `${el} ` : el;
//       } else return el;
//     })
//     .join(' '.repeat(spiceCount));

//   return stringResult;
// };

// console.log(spacer(20, ['this', 'is', 'example']));
// console.log(spacer(30, ['123456', '7890123', '456', '78']));
// console.log(spacer(10, ['1', '23', '45']));
// console.log(spacer(13, ['1', '23', '45', '678']));
// console.log(spacer(8, ['12345']));

// function growingPlant(upSpeed, downSpeed, desiredHeight, heigth = 0, day = 1) {
//   const heightAfterDay = heigth + upSpeed;
//   const heightAfterNigth = heightAfterDay - downSpeed;
//   return heightAfterDay > desiredHeight - 1
//     ? day
//     : growingPlant(upSpeed, downSpeed, desiredHeight, heightAfterNigth, ++day);
// }

// // console.log(growingPlant(100, 10, 910));
// console.log(growingPlant(10, 9, 4));

// function repeats(arr) {
//   return arr
//     .filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
//     .reduce((acc, num) => num + acc, 0);
// }

// console.log(repeats([4, 5, 7, 5, 4, 8]));
// function pairs(array, count = 0) {
//   for (let i = 0; i < array.length; i += 2)
//     if (Math.abs(array[i] - array[i + 1]) === 1) count += 1;
//   return count;
// }

// console.log(
//   pairs([
//     -50, -49, -16, 50, -17, -88, -87, 52, 51, -6, -5, 54, 18, 55, 57, 58, 21,
//     15, 20, -4, -5, -79, 41, -78, -69, -70, -7, 4, -8, 24, 23, -52, 4, -53, -18,
//     48, -19, -14, -13, -52, -51,
//   ])
// );

// function maxTriSum(numbers) {
//   const arrSet = [...new Set(numbers)];
//   const sortArr = arrSet.sort((a, b) => b - a);
//   return sortArr[0] + sortArr[1] + sortArr[2];
// }

// console.log(maxTriSum([3, 2, 6, 8, 2, 3]));

// const reverse = (array) => array.reverse();
// console.log(reverse([1, 2, 3]));

// function calc(x) {
//   const total1String = [...x].map((el) => el.charCodeAt()).join('');
//   const total2 = [...total1String.replace(/7/g, '1')].reduce(
//     (acc, num) => acc + Number(num),
//     0
//   );
//   const total1 = [...total1String].reduce((acc, num) => acc + Number(num), 0);
//   return total1 - total2;
// }

// console.log(calc('aaaaaddddr'));

// function pigIt(str) {
//   return str
//     .split(' ')
//     .map((el) => (/[^A-Za-z]/.test(el) ? el : `${el.substr(1)}${el[0]}ay`))
//     .join(' ');
// }

// console.log(pigIt('Pig latin is cool')); //igPay atinlay siay oolcay
// console.log(pigIt('Hello world !')); //elloHay orldway !

// function solve(arr) {
//   return arr.find((el) => !arr.includes(-el));
// }

// console.log(solve([1, -1, 2, -2, 3]));
// console.log(solve([1, -1, 2, -2, 3]));
// console.log(solve([-9, -105, -9, -9, -9, -9, 105]));

// const o = { x: 1, y: { z: 2 } };
// const o1 = o;
// const o2 = { ...o };
// const o3 = { ...o, y: { ...o.y } };
// const o4 = JSON.parse(JSON.stringify(o));
// o.x = 11;
// o.y.z = 22;

// // console.log(o1.x);
// // console.log(o1.y.z);
// console.log(o4.x);
// console.log(o4.y.z);
// console.log(o4);

// function createCounter() {
//   let counter = 0;
//   return () => ++counter;
// }
// const counter = createCounter();
// const counter2 = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// console.log(counter2()); // 1

// sum - сумма, необходимая к выдаче
// holdings - массив купюр, которые есть в наличии в банкомате
// возвращает аналогичный holdings массив, в котором количество выдаваемых

// Пример:
// на входе: (7300, [5000, 1000, 500, 100])
// на выходе: [1, 2, 0, 3]
// const getBanknotes = (sum, holdings) =>
//   holdings.reduce(
//     (acc, el, index) => {
//       if (acc.sum > el) {
//         const count = Math.floor(acc.sum / el);
//         acc.banknoteCount[index] = count;
//         acc.sum -= el * count;
//       }
//       return holdings.length - 1 === index ? acc.banknoteCount : acc;
//     },
//     { sum, banknoteCount: [0, 0, 0, 0] }
//   );

// console.log(getBanknotes(7300, [5000, 1000, 500, 100]));

// const getBanknotes = (sum, holdings) =>
//   holdings.reduce(
//     (acc, [value, quantity], index) => {
//       if (acc.sum > value) {
//         const count = Math.floor(acc.sum / value);
//         if (count < quantity + 1) {
//           acc.banknoteCount[index] = count;
//           acc.sum -= value * count;
//         } else {
//           acc.banknoteCount[index] = quantity;
//           acc.sum -= value * quantity;
//         }
//       }
//       return holdings.length - 1 === index ? acc.banknoteCount : acc;
//     },
//     { sum, banknoteCount: [...Array(holdings.length)].fill(0) }
//   );

// console.log(
//   getBanknotes(7300, [
//     [5000, 0],
//     [1000, 17],
//     [100, 31],
//     [50, 1],
//   ])
// );

function tidyNumber(n) {
  return [...String(n)].sort().join('') == n;
}

console.log(tidyNumber(12));
console.log(tidyNumber(9672));
console.log(tidyNumber(2335));
