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


// function openOrSenior(data) {
//     return data.map(([age, handicap]) => age >= 55 && handicap >= 7 ? 'Senior' : 'Open')
// }
// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

// function friend(friend) {
//     return friend.filter(el => el.length === 4)
// }
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))

// function isTriangle(a, b, c) {
//     if (a < b + c && b < a + c && c < a + b) {
//         return true
//     }
//     return false;
// }

// console.log(isTriangle(1, 2, 2))
// console.log(isTriangle(7, 2, 2))
