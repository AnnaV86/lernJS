function grow(x) {
    return x.reduce((acc, n) => acc * n, 1)
}
console.log(grow([1, 2, 3]))


const arr = [1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5]



// console.log(arr.reduce((acc, number) => {
//     acc[number] = ++acc[number] || 1
//     return acc
// }, {}))

// function findOdd(arr) {
//     const objList = arr.reduce((acc, number) => {
//         acc[number] = ++acc[number] || 1
//         return acc
//     }, {})
//     return Number(Object.entries(objList).filter(num => num[1] % 2 !== 0)[0][0])
// }

// console.log(findOdd(arr))



//**Буква, которая встречается 1 раз (, а которая встречается несколько раз ) */
// function duplicateEncode(word) {
//     const objList = word.split('').reduce((acc, str) => {
//         acc[str] = ++acc[str] || 1
//         return acc
//     }, {})
//     return word.split('').map(el => objList[el] === 1 ? "(" : ")").join('')
// }
// console.log(duplicateEncode("din  "))


//**добавляем новые элементы в массив трибоначи 1+1+1    1,1,1,3,5,9... где N - количество элементов в массиве


// function tribonacci(signature, n) {
//     return [...Array(n)].reduce((acc, _, index) =>
//         [...acc, 
//              + acc[index + 1] + acc[index + 2]]
//         , signature).slice(0, n)
// }


// console.log(tribonacci([1, 1, 1], 10)) // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)) // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
// console.log(tribonacci([0, 0, 0], 10)) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// console.log(tribonacci([3, 2, 1], 10)) // [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
// console.log(tribonacci([1, 1, 1], 1)) // [1]



// function maxMultiple(divisor, bound) {
//     return [...Array(bound + 1)].reduce((acc, _, index) => {
//         return index % divisor === 0 ? index : acc
//     }, 0)
// }

// console.log(maxMultiple(2, 7))
// console.log(maxMultiple(3, 10))
// console.log(maxMultiple(7, 17))
// console.log(maxMultiple(10, 50))


// [1, 2, 3].reduce((acc, el) => {
//     return acc + el // 0 + 1  acc = 0
// }, 0).reduce((acc, el) => {
//     return acc + el // 1 + 2  acc = 1
// }, 0).reduce((acc, el) => {
//     return acc + el // 3 + 3  acc = 3
// }, 0)



// //**Объект и редюсе - выситывается кол-во
// function alphabetWar(fight) {
//     const objList = {
//         w: -4,
//         p: -3,
//         b: -2,
//         s: -1,
//         m: 4,
//         q: 3,
//         d: 2,
//         z: 1
//     }

//     const war = [...fight].reduce((acc, symbol) => {
//         acc += objList[symbol] || 0
//         return acc
//     }, 0)
//     return war < 0 ? "Left side wins!"
//         : war > 0 ? "Right side wins!"
//             : "Let's fight again!"
// }
// console.log(alphabetWar("gwumsq"))
// console.log(alphabetWar("z"))
// console.log(alphabetWar("wwwwww"))


function rowWeights(array) {
    const first = [...array].reduce((acc, el, index) => {
        return index % 2 === 0 ? acc + el : acc
    }, 0)
    const second = [...array].reduce((acc, el, index) => {
        return index % 2 !== 0 ? acc + el : acc
    }, 0)
    return [first, second]
}

console.log(rowWeights([100, 50]))
console.log(rowWeights([50, 60, 70, 80]))
console.log(rowWeights([80]))