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
//   const arrLength = textArr
//     .map((el) => el.length)
//     .reduce((acc, el) => acc + el);
//   const textArrEl = textArr.length;

//   if (textArrEl === 1) {
//     const smallString = textArr
//       .map((el) => `${el}${' '.repeat(stringLength - arrLength)}`)
//       .join('');
//     return smallString;
//   }

//   const spiceCount = Math.floor((stringLength - arrLength) / (textArrEl - 1));
//   const stringResult = textArr
//     .map((el, ind) => {
//       if (stringLength - arrLength !== spiceCount * (textArrEl - 1)) {
//         const addSpice =
//           stringLength - arrLength - spiceCount * (textArrEl - 1);
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
