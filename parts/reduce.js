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

function tribonacci(signature, n) {
    return [...Array(n)].reduce((acc, _, index) =>
        [...acc, acc[index] + acc[index + 1] + acc[index + 2]]
        , signature).slice(0, n)
}


console.log(tribonacci([1, 1, 1], 10)) // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 10)) // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
console.log(tribonacci([0, 0, 0], 10)) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(tribonacci([3, 2, 1], 10)) // [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
console.log(tribonacci([1, 1, 1], 1)) // [1]