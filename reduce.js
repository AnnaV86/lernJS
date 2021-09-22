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
function duplicateEncode(word) {
    const objList = word.split('').reduce((acc, str) => {
        acc[str] = ++acc[str] || 1
        return acc
    }, {})
    return word.split('').map(el => objList[el] === 1 ? "(" : ")").join('')
}
console.log(duplicateEncode("din  "))