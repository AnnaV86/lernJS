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
// // на выходе: [1, 2, 0, 3]
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

// function tidyNumber(n) {
//   return [...String(n)].sort().join('') == n;
// }

// console.log(tidyNumber(12));
// console.log(tidyNumber(9672));
// console.log(tidyNumber(2335));

// function sortMyString(S) {
//   return [...S]
//     .reduce(
//       (acc, el, ind) => {
//         ind % 2 ? acc[1].push(el) : acc[0].push(el);
//         return acc;
//       },
//       [[], []]
//     )
//     .map((el) => el.join(''))
//     .join(' ');
// }

// console.log(sortMyString('CodeWars'));
// console.log(sortMyString("YCOLUE'VREER"));

// function add(num1, num2) {
//   console.log(num1, num2);
//   const arr1 = [...String(num1)].map(Number).reverse();
//   const arr2 = [...String(num2)].map(Number).reverse();
//   const arr = [
//     ...Array(arr1.length > arr2.length ? arr1.length : arr2.length),
//   ].map((el) => (el = 0));

//   return Number(
//     arr
//       .reduce((acc, _, ind) => {
//         acc[ind] = (arr1[ind] || 0) + (arr2[ind] || 0);
//         console.log(acc);
//         return acc;
//       }, arr)
//       .reverse()
//       .join('')
//   );
// }

// console.log(add(2, 11));
// console.log(add(26, 39));
// console.log(add(1222, 30277));

// const reverse = (number) =>
//   Number(
//     number < 10
//       ? number
//       : String(number % 10) + reverse(Math.floor(number / 10))
//   );

// console.log(reverse(154) === 451);

// const reverse = (number, acc = 0) => {
//   if (!number) {
//     return acc;
//   }

//   acc = acc * 10 + (number % 10);

//   return reverse(Math.floor(number / 10), acc);
// };

// console.log(reverse(154) === 451);

// function incrementer(nums) {
//   if (nums === []) {
//     return [];
//   }
//   return nums.map((num, ind) =>
//     num + (ind + 1) > 9 ? +String(num + ind + 1).slice(-1) : num + (ind + 1)
//   );
// }

// console.log(incrementer([4, 6, 7, 1, 3]));

// function calculate(num1, operation, num2) {
//   switch (operation) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;

//     case '/':
//       return num1 / num2;

//     default:
//       return null;
//   }
// }

// console.log(calculate(3.2, '+', 8));

// const filter = {
//   values: ['111', '25'],
//   value_type: 'PRICE',
// };

// const multiplier = filter.value_type === 'PRICE' ? 100 : 1;
// const value = filter.values?.map((i) => i * multiplier).join('%-%');

// console.log(value);

// const department = {
//   accounts: 1,
//   finance: 2,
//   canteen: 10,
//   regulation: 3,
//   trading: 6,
//   change: 6,
//   IS: 8,
//   retail: 5,
//   cleaning: 4,
//   'pissing about': 25,
// };
// function boredom(staff) {
//   const arr = Object.values(staff)
//     .map((el) => (el = department[el]))
//     .reduce((acc, el) => acc + el, 0);
//   return arr <=80 ? 'kill me now' :
//   arr < 100 ?  'i can handle this' : 'party time!!'
// }

// console.log(
//   boredom({
//     tim: 'change',
//     jim: 'accounts',
//     randy: 'canteen',
//     sandy: 'change',
//     andy: 'change',
//     katie: 'IS',
//     laura: 'change',
//     saajid: 'IS',
//     alex: 'trading',
//     john: 'accounts',
//     mr: 'finance',
//   })
// );

// function min(arr, toReturn) {
//   const min = Math.min(...arr);
//   return toReturn === 'value' ? min : arr.indexOf(min);
// }

// console.log(min([1, 2, 3, 4, 5], 'value'));
// console.log(min([1, 2, 3, 4, 5], 'index'));

// function capitalize(s, arr) {
//   return [...s]
//     .map((el, ind) => (arr.includes(ind) ? el.toUpperCase() : el))
//     .join('');
// }

// console.log(capitalize('abcdef', [1, 2, 5]));
// console.log(capitalize('abcdef', [1, 2, 5, 100]));
// console.log(capitalize('codewarriors', [5]));

// function wordValue(a) {
//   return a.map(
//     (word, ind) =>
//       [...word]
//         .map((chart) => (chart === ' ' ? 0 : chart.charCodeAt() - 96))
//         .reduce((acc, el) => acc + el, 0) *
//       (ind + 1)
//   );
// }

// console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']));

// class Block {
//   constructor(data) {
//     [this.width, this.length, this.height] = data;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getHeight() {
//     return this.height;
//   }

//   getVolume() {
//     return this.width * this.length * this.height;
//   }

//   getSurfaceArea() {
//     return (
//       2 *
//       (this.width * this.length +
//         this.length * this.height +
//         this.height * this.width)
//     );
//   }
// }

// let block = new Block([2, 4, 6]);

// console.log(block.getSurfaceArea());

// function vowel2index(str) {
//   return str.replace(/[aeiou]/gi, (simb, ind) => ind + 1);
// }

// console.log(
//   vowel2index(
//     `90's cornhole Austin, pickled butcher yr messenger bag gastropub next level leggings listicle meditation try-hard Vice. Taxidermy gastropub gentrify, meh fap organic ennui fingerstache pickled vegan. Seitan sustainable PBR&B cornhole VHS. Jean shorts actually bitters ugh blog Intelligentsia. Artisan Kickstarter DIY, fixie cliche salvia lo-fi four loko. PBR&B Odd Future ugh fingerstache cray Wes Anderson chia typewriter iPhone bespoke four loko, Intelligentsia photo booth direct trade. Aesthetic Tumblr Portland XOXO squid, synth viral listicle skateboard four dollar toast cornhole Blue Bottle semiotics.`
//   )
// );

// function lastSurvivor(letters, coords) {
//   let string = [...letters];
//   coords.map((el) =>
//     string.map((elStr, ind) => (ind === el ? string.splice(ind, 1) : elStr))
//   );

//   return string.join('');
// }

// console.log(lastSurvivor('kbc', [2, 1]));

// function unluckyDays(year) {
//   let count = 0;
//   for (let ind = 0; ind < 13; ind++) {
//     const str = `${year}-0${ind + 1}-13`;
//     const date = new Date(str);
//     const dayOfWeek = date.getDay();
//     if (dayOfWeek === 5) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(unluckyDays(1001));

// function productArray(numbers) {
//   return numbers.map((el) => numbers.reduce((acc, num) => acc * num, 1) / el);
// }

// console.log(productArray([3, 27, 4, 2]));

// function catMouse(x) {
//   return x.length > 5 ? 'Escaped!' : 'Caught!';
// }

// console.log(catMouse('C....m'));
// console.log(catMouse('C..m'));
// console.log(catMouse('C.m'));
// console.log(catMouse('C...m'));
// console.log(catMouse('C..........m'));

// function specialNumber(n) {
//   return /[6-9]/.test(n) ? 'NOT!!' : 'Special!!';
// }

// console.log(specialNumber(2));
// console.log(specialNumber(9));
// console.log(specialNumber(513));
// console.log(specialNumber(581));

// function meeting(x) {
//   const index = x.indexOf('O');
//   console.log(x, index);
//   return index < 0 ? 'None available!' : index;
// }

// console.log(meeting(['X', 'O', 'X']));

// function swap(string) {
//   const vowels = ['a', 'i', 'o', 'u', 'e'];
//   return [...string].map((el) => (vowels.includes(el) ? el.toUpperCase() : el));
// }

// console.log(swap('   @@@'));
// console.log(swap('abracadabra'));

// setTimeout(function timeout() {
//   console.log('Таймаут');
//   }, 0);

//   let p = new Promise(function(resolve, reject) {
//   console.log('Создание промиса');
//   resolve();
//   });

//   p.then(function(){
//   console.log('Обработка промиса');
//   });

//   console.log('Конец скрипта');

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// console.log(1);

//1,7,1,3,5,2,6,4

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log);

// new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log);

// console.log(6);

// setTimeout(() => console.log(7), 0);

// //1,

// const myPromise = (delay) =>
//   new Promise((res, rej) => {
//     setTimeout(res, delay);
//   });
// setTimeout(() => console.log('in setTimeout1'), 1000);
// myPromise(1000).then((res) => console.log('in Promise 1'));
// setTimeout(() => console.log('in setTimeout2'), 100);
// myPromise(2000).then((res) => console.log('in Promise 2'));
// setTimeout(() => console.log('in setTimeout3'), 2000);
// myPromise(1000).then((res) => console.log('in Promise 3'));
// setTimeout(() => console.log('in setTimeout4'), 1000);
// myPromise(5000).then((res) => console.log('in Promise '));

// //

// const sum = (x) => {
//   return (y) => y;
// };

// console.log(sum(5)(3));

// const palindrome = (string) => {
//   const str = string.toLowerCase();
//   return [...str].reverse().join('') === str;
// };

// console.log(palindrome('racecar'));
// console.log(palindrome('table'));

// const Fizzbuzz = (n) => {
//   return [...Array(n)]
//     .map((_, ind) => ind + 1)
//     .forEach((el) => {
//       if (el % 3 === 0 && el % 5 === 0) console.log('FizzBuzz!');
//       if (el % 3 === 0) console.log('Fizz!');
//       if (el % 5 === 0) console.log('Buzz!');
//       else {
//         console.log(el);
//       }
//     });
// };

// Fizzbuzz(15);

// const jjj = 'jkjkjkfiigu';

// const reducer = (str) => {
//   return [...str].reduce((acc, el) => {
//     acc[el] = ++acc[el] || 1;
//     return acc;
//   }, {});
// };

// console.log(reducer(jjj));

// function stringMerge(string1, string2, letter) {
//   const word1 = string1.slice(0, string1.indexOf(letter));
//   const word2 = string2.slice(string2.indexOf(letter));
//   return word1 + word2;
// }

// console.log(stringMerge('person', 'here', 'e'));

// function toTime(seconds) {
//   const hours = Math.floor(seconds / 3600);
//   const minuts = Math.floor((seconds % 3600) / 60);

//   return `${hours} hour(s) and ${minuts} minute(s)`;
// }

// console.log(toTime(3600)); //'1 hour(s) and 0 minute(s)'

// function crap(x, bags, cap) {
//   if (x.filter((el) => el.includes('D')).length) return 'Dog!!';
//   const crap = x.filter((el) => el.includes('@')).length;
//   return bags * cap >= crap ? 'Clean' : 'Cr@p';
// }

// console.log(
//   crap(
//     [
//       ['_', '_', '_', '_'],
//       ['_', '_', '_', '@'],
//       ['_', '_', '@', '_'],
//     ],
//     2,
//     2
//   )
// );
// console.log(
//   crap(
//     [
//       ['_', '_', '_', '_'],
//       ['_', '_', '_', '@'],
//       ['_', '_', '@', '_'],
//     ],
//     1,
//     1
//   )
// );

// console.log(
//   crap(
//     [
//       ['_', '_'],
//       ['_', '@'],
//       ['D', '_'],
//     ],
//     2,
//     2
//   )
// );
