// const arrNumbers = [10, -5, 5, -1, -8, 30, 16, -4, 11]
// const arrNumbers2 = [4, -6, 9, -3, -4, 35, 78, -3, 51]

// function summPlusNumber(arr) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result += arr[i]
//         }
//     }
//     return result
// }

// function summPlusNumber(arr) {
//     return arr.filter(a => a > 0).reduce((a, b) => a + b, 0)
// }

// console.log(summPlusNumber(arrNumbers))
// console.log(summPlusNumber(arrNumbers2))


// let description = "Три слова - это два слова. Три слова - это два слова. Три слова - это два слова."

// function firstWordInSentence(str) {
//     let result = []
//     let arr = str.split('. ')

//     for (let i = 0; i < arr.length; i++) {
//         let arr2 = arr[i].split(' ')
//         result.push(arr2[0])
//     }
//     return result.join(', ')
// }
// console.log(firstWordInSentence(description))

// function inverseNumber(num) {
//     return arr = String(num).split('').reverse().map(number => Number(number))

// }

// console.log(inverseNumber(459))


// function getString(str, count) {
//     let string = ''
//     for (let i = 0; i < count; i++) {
//         string = `${string}${str}`
//     }
//     return string
// }
// console.log(getString('Hello', 3))

const color = 'White, Black, Red, Green, Blue'

function maxWord(arr) {
    const arr2 = arr.split(', ')
    const sortWord = arr2.sort((a, b) => a.length - b.length)
    const maxWord = sortWord[sortWord.length - 1].length
    let arrMaxWord = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length = maxWord) {
            arrMaxWord.push(arr[i])
        }
    }
    return arrMaxWord
}
console.log(maxWord(color))