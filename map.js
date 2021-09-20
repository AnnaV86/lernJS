// function sumMix(x) {
//     return x.map(n => Number(n)).reduce((acc, n) => acc + n, 0)
// }
// console.log(sumMix([9, 3, '7', '3']))





// function solution(number) {
//     if (number <= 0) {
//         return 0
//     }
//     let arr = [...Array(number - 1)].map((_, i) => i + 1).filter(el => el % 3 === 0 || el % 5 === 0)
//     const sum = arr.reduce((acc, n) => acc + n, 0)
//     return sum < 0 ? 0 : sum
// }
// console.log(solution(10))



// function accum(s) {
//     return s.split('').map((el, i) =>
//         el.toUpperCase() + [...Array(i)].map(n => el.toLowerCase()).join('')
//     ).join('-')
// }
// console.log(accum("ZpglnRxqenU"))