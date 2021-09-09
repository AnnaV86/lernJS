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




// const color = 'White, Black, Red, Green, Blue, Violette, Orange'

// function words(str) {
//     const newArr = str.split(', ')
//     const sortWord = newArr.sort((a, b) => a.length - b.length)
//     const maxWord = sortWord[sortWord.length - 1].length
//     const result = sortWord.filter(word => maxWord === word.length)
//     return result.length === 1 ? result[0] : result

// }
// console.log(words(color))



// function take(arr, n) {
//     return arr.slice(0, n)
// }
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3))
// console.log(take([], 3))
// console.log(take([-38, 69, -12, 27, -27, -81, -10], 22))


// function peopleWithAgeDrink(old) {
//     switch (old) {
//         case old < 14 ? old : null:
//             return 'drink toddy';
//         case old < 18 ? old : null:
//             return 'drink coke';
//         case old < 21 ? old : null:
//             return 'drink beer';
//         default: return 'drink whisky'
//     }
// }
// console.log(peopleWithAgeDrink(8))
// console.log(peopleWithAgeDrink(16))
// console.log(peopleWithAgeDrink(18))
// console.log(peopleWithAgeDrink(20))
// console.log(peopleWithAgeDrink(50))



// function howManySmaller(arr, n) {

//     total = 0;

//     for (i = 0; i < arr.length; i++) {

//         if (arr[i].toFixed(2) < n)

//             total++;

//     }

//     return total;

// }

// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24))    //2
// console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19))     //1
// console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212))    //2

// function pointsPer48(ppg, mpg) {
//     return +(ppg / mpg * 48).toFixed(1) || 0
// }
// console.log(pointsPer48(12, 20))
// console.log(pointsPer48(10, 10))
// console.log(pointsPer48(0, 0))
// console.log(pointsPer48(5, 17))
// console.log(pointsPer48(30.8, 34.7))


// function remove(s) {
//     if (s[s.length - 1] === '!') {
//         return s.substring(0, s.length - 1)
//     } else {
//         return s
//     }
// }


// function remove(s) {
//     return s[s.length - 1] === '!' ? s.substring(0, s.length - 1) : s
// }

// console.log(remove("!Hi!"))

var array1 = [2, 3, 5, 7, 11];

find = (arr, el) => {
    return arr.includes(el) ? arr.indexOf(el) : "Not found"
}

console.log(find(array1, 3))



