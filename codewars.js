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

// class SmallestIntegerFinder {
//     findSmallestInt(arrNumbers) {
//         return arrNumbers.reduce((acc, number) => {
//             acc > number ? acc = number : number
//             return acc
//         })
//     }
// }

// const objectSmallestIntegerFinder = new SmallestIntegerFinder()

// console.log(objectSmallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228]))

// var array1 = [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true];

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(word => word === true).length
// }


// console.log(countSheeps(array1))

// function squareSum(numbers) {
//     return numbers.reduce((acc, num) => acc + (num * num), 0)
// }

// console.log(squareSum([1, 2]))
// console.log(squareSum([0, 3, 4, 5]))



// function century(year) {
//     return Math.ceil(year / 100);
// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))
// console.log(century(89))

// function litres(time) {
//     return Math.floor(time / 2);
// }

// console.log(litres(2))
// console.log(litres(1.4))
// console.log(litres(12.3))
// console.log(litres(0.82))
// console.log(litres(1787))
// console.log(litres(0))



// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0
// }

// console.log(isDivisible(3, 3, 4))
// console.log(isDivisible(12, 3, 4))
// console.log(isDivisible(8, 3, 4))
// console.log(isDivisible(48, 3, 4))

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '*': return value1 * value2;
//         case '/': return value1 / value2;
//     }
//     return 0
// }
// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))

// function digitize(n) {
//     return String(n).split('').reverse().map(Number)
// }
// console.log(digitize(35231))

// function abbrevName(name) {
//     const nameArr = name.split(' ')
//     return (nameArr[0][0] + '.' + nameArr[1][0]).toUpperCase()
// }

// console.log(abbrevName("Sam Harris"))
// console.log(abbrevName("Patrick Feenan"))
// console.log(abbrevName("k Favuzzi"))
// console.log(abbrevName("David Mendieta"))

// function findNeedle(haystack) {
//     let result = haystack.indexOf('needle')
//     return `found the needle at position ${result}`
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// function countPositivesSumNegatives(input) {
//     let negativeArr = input.filter(i => i < 0).reduce((acc, i) => acc + i, 0)
//     let positiveArr = input.filter(i => i > 0).length
//     if (positiveArr === 0 && negativeArr === 0) {
//         return []
//     }
//     return [positiveArr, negativeArr]
// }

// console.log(countPositivesSumNegatives([0, 0]))

// function invert(array) {
//     return array.map(n => -n)
// }

// console.log(invert([1, 2, 3, 4, 5]))
// console.log(invert([-1, 2, -3, 4, -5]))
// console.log(invert([]))
// console.log(invert([0]))


// function getAverage(marks) {
//     return Math.round((marks.reduce((acc, n) => acc + n)) / marks.length)
// }

// console.log(getAverage([15, 7, 13, 8, 11, 16, 6, 17]))

// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ')
// }
// console.log(reverseWords("hello world!"))


// function past(h, m, s) {
//     return (s + m * 60 + h * 60 * 60) * 1000
// }

// console.log(past(0, 0, 0))

// function sumArray(array) {
//     return array.sort((a, b) => a - b)
//         .slice(1, array.length - 1)
//         .reduce((acc, n) => acc + n, 0)
// }

// console.log(sumArray([6, 2, 1, 8, 10]))

// function points(games) {
//     return games.map(game => game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0)
//         .reduce((acc, n) => acc + n, 0)
// }

// console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))




// const reverseSeq = n => {
//     let arr = []
//     for (let i = n; i > 0; i--) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(reverseSeq(4))





// function hero(bullets, dragons) {
//     return bullets >= dragons * 2
// }
// console.log(hero(0, 0))





// function arrayPlusArray(arr1, arr2) {
//     return [...arr1, ...arr2].reduce((acc, n) => acc + n, 0)
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))





// function bonusTime(salary, bonus) {
//     return bonus === true ? `\u00A3${salary * 10}` : '\u00A3' + salary
// }

// console.log(bonusTime(10000, true))
// console.log(bonusTime(30, false))





// function bmi(weight, height) {
//     let index = weight / (height * height)
//     if (index <= 18.5) {
//         return 'Underweight'
//     }
//     else if (index <= 25.0) {
//         return 'Normal'
//     }
//     else if (index <= 30.0) {
//         return 'Overweight'
//     }
//     return 'Obese'
// }
// console.log(bmi(80, 1.80))




// function paperwork(n, m) {
//     return n < 0 || m < 0 ? 0 : n * m
// }
// console.log(paperwork(5, 5))
// console.log(paperwork(-5, 5))
// console.log(paperwork(5, -5))





// function firstNonConsecutive(arr) {
//     const result = arr.find((el, i, m) => el - 1 !== m[i - 1] && i !== 0)
//     return typeof result === 'number' ? result : null
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))





// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, 'U')
// }
// console.log(DNAtoRNA("GCAT"))
// console.log(DNAtoRNA("TTTT"))
// console.log(DNAtoRNA("GACCGCCGCC"))








// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {
//         rock: "scissors",
//         paper: "rock",
//         scissors: "paper"
//     };
//     if (p2 === rules[p1]) {
//         return "Player 1 won!";
//     }
//     else {
//         return "Player 2 won!";
//     }
// };

// console.log(rps('rock', 'paper'))
// console.log(rps('paper', 'scissors'))
// console.log(rps('rock', 'scissors'))
// console.log(rps('rock', 'rock'))





// function countBy(x, n) {
//     var z = [];
//     let a = 1

//     for (let i = 1; i <= n; i++) {
//         z.push(x * i)
//     }
//     return z;
// }

// console.log(countBy(2, 4))





// function betterThanAverage(classPoints, yourPoints) {
//     return (classPoints.reduce((acc, n) => acc + n)) / classPoints.length < yourPoints
// }

// console.log(betterThanAverage([2, 3, 5], 5))






// function sumMix(x) {
//     return x.map(n => Number(n)).reduce((acc, n) => acc + n, 0)

// }





// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump <= mpg * fuelLeft
// };
// console.log(zeroFuel(50, 25, 2))
// console.log(zeroFuel(100, 50, 1))





// var countSheep = function (num) {
//     let str = ''
//     for (let i = 1; i <= num; i++) {
//         str += `${i} sheep...`
//     }
//     return str
// }

// console.log(countSheep(4))



// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
// }

// console.log(feast("brown bear", "bear claw"))


// function areYouPlayingBanjo(name) {
//     return name[0].toUpperCase() === 'R' ? name + " plays banjo" : name + " does not play banjo"
// }

// console.log(areYouPlayingBanjo("Adam"))
// console.log(areYouPlayingBanjo("Ringo"))
// console.log(areYouPlayingBanjo("rolf"))


// function removeExclamationMarks(s) {
//     return s.replace(/!/g, '');
// }

// console.log(removeExclamationMarks("Hello World!!"))



// function lovefunc(flower1, flower2) {
//     return flower1 % 2 !== flower2 % 2
// }
// console.log(lovefunc(1, 4))
// console.log(lovefunc(2, 2))
// console.log(lovefunc(0, 1))
// console.log(lovefunc(0, 0))


// function expressionMatter(a, b, c) {
//     return Math.max((a * (b + c)), (a * b * c), ((a + b) * c), (a + b + c), (a * b + c), (a + b * c))
// }

// console.log(expressionMatter(2, 1, 2))





// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
// }


// console.log("hellO woRld".toAlternatingCase())






// function greet(language) {
//     const odjLanguage = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     }
//     return odjLanguage[language] === undefined ? 'Welcome' : odjLanguage[language]
// }

// console.log(greet('english'))
// console.log(greet('dutch'))
// console.log(greet('IP_ADDRESS_INVALID'))





// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9
// }
// console.log(simpleMultiplication(2))


// function cockroachSpeed(s) {
//     return Math.floor(s / 3.60 * 100)
// }
// console.log(cockroachSpeed(1.08))
// console.log(cockroachSpeed(1.09))
// console.log(cockroachSpeed(0))

// function oddCount(n) {
//     return Math.floor(n / 2)
// }

// console.log(oddCount(15023))


// function getCount(str) {
//     var vowelsCount = 0;

//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] === 'a' ||
//             str[i] === 'e' ||
//             str[i] === 'i' ||
//             str[i] === 'o' ||
//             str[i] === 'u') {
//             vowelsCount += 1
//         }
//     }
//     return vowelsCount;
// }

// console.log(getCount("abracadabra"))



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


// function disemvowel(str) {
//     return str.replace(/[aeiuo]/ig, '');
// }
// console.log(disemvowel("This website is for losers LOL!"))


// function highAndLow(numbers) {
//     const arr = numbers.split(' ').map(el => Number(el))
//     return `${Math.max(...arr)} ${Math.min(...arr)}`
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -



// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }
// console.log(3 % 2)


// function digital_root(n) {
//     if (String(n).length === 1) {
//         return n
//     }
//     const arrString = String(n).split('').reduce((acc, el) => acc + Number(el), 0)
//     return digital_root(arrString)
// }
// console.log(digital_root(456))



function likes(names) {
    return names.length === 0 ? "no one likes this"
        : names.length === 1 ? names[0] + " likes this"
            : names.length === 2 ? `${names[0]}, ${names[1]} like this`
                : names.length === 3 ? `${names[0]}, ${names[1]}, ${names[2]} like this`
                    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}




// function likes(names) {
//     const text = {
//         0: "no one likes this",
//         1: names[0] + " likes this",
//         2: `${names[0]} and ${names[1]} like this`,
//         3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//         4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
//     return names.length > 4 ? text[4] : text[names.length]
// }


// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Kate']))



// function spinWords(string) {
//     return string.split(' ').map(el => el.length > 4 ? el.split('').reverse().join('') : el)
//         .join(' ')
// }

// console.log(spinWords("Hey fellow warriors"))


// function duplicateCount(text) {
//     const objList = text.split('').map(el => el.toLowerCase()).reduce((acc, str) => {
//         acc[str] = ++acc[str] || 1
//         return acc
//     }, {})
//     return Object.entries(objList).filter(num => num[1] > 1).length
// }
// console.log(duplicateCount(""))


// function persistence(n) {
//     let count = -1
//     return (function persistence(n) {
//         ++count
//         if (String(n).length === 1) {
//             return count
//         }

//         const arrString = String(n).split('').reduce((acc, el) => acc * Number(el), 1)
//         return persistence(arrString)
//     })(n)
// }

// console.log(persistence(999))

// function arrayDiff(a, b) {
//     return a.filter(el => !b.includes(el))
// }

// console.log(arrayDiff([3, 4], [3]))

// function findOutlier(integers) {
//     const filterOdd = integers.filter(el => el % 2 === 0)
//     const filterEven = integers.filter(el => el % 2 !== 0)
//     return Number(filterOdd.length === 1 ? filterOdd.join() : filterEven.join())
// }

// console.log(findOutlier([1, 1, 0, 1, 1]))

// function duplicateEncode(word) {
//     const objList = word.split('').reduce((acc, str) => {
//         acc[str] = ++acc[str] || 1
//         return acc
//     }, {})
//     return word.split('').map(el => objList[el] === 1 ? "(" : ")").join('')
// }
// console.log(duplicateEncode("din  "))


// function createPhoneNumber(numbers) {
//     return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`
// }
// function createPhoneNumber(numbers) {
//     return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// function isValidWalk(walk) {
//     const objList = walk.reduce((acc, str) => {
//         acc[str] = ++acc[str] || 1
//         return acc
//     }, {})
//     return objList['n'] === objList['s'] && objList['w'] === objList['e'] && walk.length === 10
// }
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))



// function alphabetPosition(text) {
//     const arrText = text.match(/[a-z]/ig) || []
//     if (arrText.length === 0) {
//         return ''
//     }
//     return arrText.map(x => x.toLowerCase().charCodeAt() - 96).join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// console.log(''.charCodeAt())

function order(words) {
    const arr = words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/))
    return arr
}


console.log(order("is2 Thi1s T4est 3a"))