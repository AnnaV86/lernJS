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

// var array1 = [2, 3, 5, 7, 11];

// find = (arr, el) => {
//     return arr.includes(el) ? arr.indexOf(el) : "Not found"
// }

// console.log(find(array1, 3))


// function sc(floor) {
//     if (floor <= 1) return '';
//     return 'Aa~ '.repeat(floor - 1) + 'Pa! ' + (floor <= 6 ? 'Aa! ' : "")

// }



// console.log(sc(5))
// console.log(sc(6))
// console.log(sc(10))
// console.log(sc(1))
// console.log(sc(-1))

// const month = {
//     январь: 1,
//     февраль: 2,
//     март: 3,
//     апрель: 4,
//     май: 5,
//     июнь: 6,
//     июль: 7,
//     август: 8,
//     сентябрь: 9,
//     октябрь: 10,
//     ноябрь: 11,
//     декабрь: 12
// }


// const arrMonth = ['март', 'февраль', 'январь', 'июнь', 'май', 'апрель', 'сентябрь', 'август', 'июль', 'декабрь', 'ноябрь', 'октябрь']

// console.log(arrMonth.sort((a, b) => month[a] - month[b]))


// const arr = [['u', 1], ['p', 1], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['h', 4], ['d', 2], ['v', 5]]


// console.log(arr.sort((a, b) => a[1] === b[1]
//     ? a[0].charCodeAt() - b[0].charCodeAt()
//     : a[1] - b[1]))


// function even_or_odd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd'
// }

// console.log(even_or_odd(-8))

// function positiveSum(arr) {
//     let summ = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             summ = summ + arr[i]
//         }
//     } return summ
// }


// function positiveSum(arr) {
//     const newArr = arr.filter(numb => numb > 0)
//     return newArr.reduce((a, b) => a + b, 0)
// }

// console.log(positiveSum([0]))


// function opposite(number) {
//     return 0 - number
// }


// console.log(opposite(1))
// console.log(opposite(0))
// console.log(opposite(-51))
// console.log(opposite(100))


// function removeChar(str) {
//     return str.slice(1, str.length - 1)
// };

// console.log(removeChar('eloquent'))

// function repeatStr(n, s) {
//     return s.repeat(n);
// }

// console.log(repeatStr(3, "*"))



// function solution(str) {
//     return str.split('').reverse().join('')
// }
// console.log(solution('world'))


// var summation = function (num) {    //все цифры в числе от 1 до num
//     return num * (num + 1) / 2

// }
// console.log(summation(8))
// console.log(summation(2))


// **Удаление пробелов**


// function noSpace(x) {
//     return x.replace(/\s/g, '')
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

class SmallestIntegerFinder {
    findSmallestInt(arrNumbers) {
        return arrNumbers.reduce((acc, number) => {
            acc > number ? acc = number : number
            return acc
        })
    }
}

const objectSmallestIntegerFinder = new SmallestIntegerFinder()

console.log(objectSmallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228]))