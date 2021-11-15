//     при 5
// 1 запуск  5 * 4
// 2 запуск  4 * 3
// 3 запуск  3 * 2
// 4 запуск  2 * 1
// 5 запуск  1 мы достигли точки остановы
// 6 запуск  уже идет в обратном направлении 2 * 1
// 7 запуск  3 * 2
// 8 запуск  4 * 6
// 9 запуск  5 * 24

// 1*2*3*4*5=120
// function factorial(number) {
//     return number === 1 ? 1 : number * factorial(number - 1)
// }

// console.log(factorial(5)) // 120

// const persistence = num => {
//     const arrMulti = String(num).split('').reduce((a, b) => a * Number(b), 1)
//     return num < 10 ? 0 : 1 + persistence(arrMulti)
// }

// console.log(persistence(999))

// // 4+5+6=15  1+5=6
// function digital_root(n) {
//     if (String(n).length === 1) {
//         return n
//     }
//     const arrString = String(n).split('').reduce((acc, el) => acc + Number(el), 0)
//     return digital_root(arrString)
// }
// console.log(digital_root(456)) // 6

//     **//Максимальное число, которое делится на divisor и меньше или равно bound
//     function maxMultiple(divisor, bound) {
//         return bound % divisor === 0 ? bound : maxMultiple(divisor, bound - 1)
//     }

// console.log(maxMultiple(2, 7))
// console.log(maxMultiple(3, 10))
// console.log(maxMultiple(7, 17))
// console.log(maxMultiple(10, 50))

// function roundToNext5(n) {
//     return n % 5 === 0 ? n : roundToNext5(n + 1)
// }

// console.log(roundToNext5(-5))

//=====>>>  СЧЁТЧИК!!!!!!
const palindromeChainLength = (n) => {
  let numArr = Number(String(n).split('').reverse().join(''));
  return n === numArr ? 0 : 1 + palindromeChainLength(n + numArr);
};

console.log(palindromeChainLength(87));
console.log(palindromeChainLength(22));
