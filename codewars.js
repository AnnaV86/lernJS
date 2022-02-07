// const arrNumbers = [10, -5, 5, -1, -8, 30, 16, -4, 11]
// const arrNumbers2 = [4, -6, 9, -3, -4, 35, 78, -3, 51]

// function PlusNumber(arr) {
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

// function likes(names) {
//   return names.length === 0
//     ? 'no one likes this'
//     : names.length === 1
//     ? names[0] + ' likes this'
//     : names.length === 2
//     ? `${names[0]}, ${names[1]} like this`
//     : names.length === 3
//     ? `${names[0]}, ${names[1]}, ${names[2]} like this`
//     : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }

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

// function order(words) {
//     const arr = words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/))
//     return arr
// }

// console.log(order("is2 Thi1s T4est 3a"))

// function tribonacci(signature, n) {
//     for (let i = 3; i < n; i++) {
//         signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3])
//     }
//     return signature.slice(0, n)
// }

// console.log(tribonacci([1, 1, 1], 10)) // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)) // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
// console.log(tribonacci([0, 0, 0], 10)) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// console.log(tribonacci([3, 2, 1], 10)) // [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
// console.log(tribonacci([1, 1, 1], 1)) // [1]

// function digPow(n, p) {
//     const summPow = String(n).split('').reduce((acc, el, index) => acc + el ** (p + index), 0)
//     return summPow % n === 0 ? summPow / n : -1
// }

// console.log(digPow(89, 1))
// console.log(digPow(92, 1))
// console.log(digPow(46288, 3))

// const tri = (signature, n) => {
//     return
// }

// console.log(tri([1, 1, 1], 6)) // [1,1,1,3,5,8]

// function findEvenIndex(arr) {
//     let findIndex = arr.map((_, i) => arr.slice(0, i).reduce((acc, el) => acc + el, 0) === arr.slice(i + 1, arr.length).reduce((acc, el) => acc + el, 0))

//     return findIndex.indexOf(true)
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]))
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]))

// function maxMultiple(divisor, bound) {
//     const multi = Math.floor(bound / divisor)
//     return multi * divisor
// }

// function maxMultiple(divisor, bound) {
//     return bound % divisor === 0 ? bound : maxMultiple(divisor, bound - 1)
// // }

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

// function songDecoder(song) {
//     return song.replace(/WUB/g, ' ').split('').join('')
// }
// console.log(songDecoder("AMWUBBLKJWUBC"))

// function iqTest(numbers) {
//     const arrOdd = numbers.split(' ').filter(el => el % 2 === 0)
//     const arrEven = numbers.split(' ').filter(el => el % 2)
//     return arrEven.length === 1 ? numbers.split(' ').indexOf(arrEven.join('')) + 1 : numbers.split(' ').indexOf(arrOdd.join('')) + 1
// }

// console.log(iqTest("2 4 8 7 8 10"))
// console.log(iqTest("1 1 2"))

// function roundToNext5(n) {
//     while (n % 5 !== 0) {
//         n++
//     }
//     return n
// }

// function roundToNext5(n) {
//     return n % 5 === 0 ? n : roundToNext5(n + 1)
// }

// console.log(roundToNext5(-5))

// function reverseLetter(str) {
//     return str.match(/[a-z]/gi).reverse().join('')
// }

// console.log(reverseLetter("ultr53o?n"))

// function removeDuplicateWords(s) {
//     const arr = s.split(' ')
//     return [...new Set(arr)].join(' ')
// }

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta'))

// function minValue(values) {
//     return [...new Set(values)].sort((a, b) => a - b).join('')
// }
// console.log(minValue([5, 6, 9, 9, 7, 6, 4]))

// function squareDigits(num) {
//     return Number(String(num).split('').map(el => el * el).join(''));
// }
// console.log(squareDigits(3212))

// function getMiddle(s) {
//     const result = Math.trunc(s.length / 2)
//     return s.length % 2 === 0 ? s.slice(result - 1, result + 1) : s[result]
// }
// console.log(getMiddle("midple"))
// console.log(getMiddle("A"))
// console.log(getMiddle("dfrfh"))

// function isSortedAndHow(array) {
//     const arrInOrder = array.filter((el, i, arr) => el < arr[i + 1]).length === 0
//     const outOfOrder = array.filter((el, i, arr) => el > arr[i + 1]).length === 0

//     if (!arrInOrder && !outOfOrder) {
//         return 'no'
//     }

//     return arrInOrder ? "yes, descending" : "yes, ascending"
// }
// console.log(isSortedAndHow([15, 7, 3, -8]))
// console.log(isSortedAndHow([1, 2]))
// console.log(isSortedAndHow([4, 2, 30]))

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

// function isIsogram(str) {
//     const arr = str.toUpperCase().split('')
//     return [...new Set(arr)].length === arr.length
// }

// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("moOse"))

// function rowWeights(array) {
//     const first = [...array].reduce((acc, el, index) => {
//         return index % 2 === 0 ? acc + el : acc
//     }, 0)
//     const second = [...array].reduce((acc, el, index) => {
//         return index % 2 !== 0 ? acc + el : acc
//     }, 0)
//     return [first, second]
// }

// console.log(rowWeights([100, 50]))
// console.log(rowWeights([50, 60, 70, 80]))
// console.log(rowWeights([80]))

// function wordsToMarks(string) {
//     return [...string].reduce((acc, el) => acc + (el.charCodeAt() - 96), 0)
// }
// console.log(wordsToMarks("attitude"))
// const randomElement = {
//     a: 1,
//     b: 2
// }

// console.log(`${JSON.stringify(randomElement)}`)

// var isSquare = function (n) {
//     return Number.isInteger(Math.sqrt(n))
// }

// console.log(isSquare(25))
// console.log(isSquare(0))
// console.log(isSquare(-1))
// console.log(isSquare(3))

// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(el => el(0).toUpperCase()).join('')
// };

// function findShort(s) {
//     return Math.min(...s.split(' ').map(el => el.length))
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// function DNAStrand(dna) {
//     const replace = {
//         G: 'C',
//         C: 'G',
//         T: 'A',
//         A: 'T'
//     }
//     return [...dna].map(x => replace[x]).join('')
// }
// console.log(DNAStrand("GTAT"))

// function XO(str) {
//     const xo = [...str.toLowerCase()].reduce((acc, str) => {
//         acc[str] = ++acc[str] || 1
//         return acc
//     }, {})
//     return xo.x === xo.o
// }

// console.log(XO("xxxooom"))

// function filter_list(l) {
//     return l.filter(el => typeof (el) === 'number')
// }
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))

// function getSum(a, b) {
//     if (b < a) {
//         return b === a ? b : b + getSum(a, b + 1)
//     }
//     return a === b ? a : a + getSum(a + 1, b)
// }
// console.log(getSum(-1, 0))
// console.log(getSum(0, -1))

// function maskify(cc) {
//     return cc.slice(0, -4).replace(/\w/g, '#') + cc.slice(-4, cc.length)
// }
// console.log(maskify('4556364607935616'))
// console.log(maskify('1'))
// console.log(maskify('11111'))
// console.log(maskify(''))
// console.log(maskify('jfidyvls'))

// function nbYear(p0, percent, aug, p) {
//     let year = 0
//     for (let i = 1; p0 < p; i++) {
//         p0 = p0 + p0 * percent / 100 + aug;
//         ++year
//     }
//     return year
// }
// console.log(nbYear(1500, 5, 100, 5000))

// function longest(s1, s2) {
//     const newArr = [...s1, ...s2].sort()
//     return [...new Set(newArr)].join('')
// }
// console.log(longest("aretheyhere", "yestheyarehere"))

// function validatePIN(pin) {
//     if (pin.length === 6 || pin.length === 4) {
//         return pin.replace(/[0-9]/g, '') === ''
//     } else {
//         return false
//     }
// }
// console.log(validatePIN("1234567"))
// console.log(validatePIN("123456"))
// console.log(validatePIN("1234"))
// console.log(validatePIN("123e56"))
// console.log(validatePIN("123e"))

// function findNextSquare(sq) {
//     if (Number.isInteger(Math.sqrt(sq))) {
//         return Math.pow((Math.sqrt(sq) + 1), 2)
//     }
//     return -1;
// }
// console.log(findNextSquare(121))
// console.log(findNextSquare(7))

// function openOrSenior(data) {
//     return data.map(([age, handicap]) => age >= 55 && handicap >= 7 ? 'Senior' : 'Open')
// }
// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

// function printerError(str) {
//     return `${[...str].filter(el => el.charCodeAt() > 109).length}/${str.length}`
// }
// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))

// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''), 2)
// };
// console.log(binaryArrayToNumber([0, 0, 0, 1]))

// function addBinary(a, b) {
//     return parseInt(a + b).toString(2)
// }
// console.log(addBinary(1, 2))

// var number = function (busStops) {
//     return busStops.reduce((acc, el) => acc + el[0] - el[1], 0)
// }
// console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))

// function divisors(integer) {
//     let res = []
//     for (let i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//     return res.length ? res : integer + ' is prime'
// };
// console.log(divisors(15))
// console.log(divisors(12))
// console.log(divisors(13))

// function SeriesSum(n) {
//     let summ = 0
//     let count = 1
//     for (let i = 0; i < n; i++) {
//         summ += 1 / count
//         count = count + 3
//     }
//     return summ.toFixed(2)
// }

// console.log(SeriesSum(3))
// console.log(SeriesSum(1))
// console.log(SeriesSum(5))
// console.log(SeriesSum(4))

// function reverseWords(str) {
//     return str.split(' ').map(el => [...el].reverse().join('')).join(' ')
// }
// console.log(reverseWords('double  spaced  words'))
// console.log(reverseWords('a b c d'))
// console.log(reverseWords('apple'))

// function oddOrEven(array) {
//     return array.reduce((acc, n) => acc + n, 0) % 2 === 0 ? "even" : "odd"
// }
// console.log(oddOrEven([0, -1, 2]))
// console.log(oddOrEven([0]))
// console.log(oddOrEven([0, 1, -4]))
// console.log(oddOrEven([0, 1, 5]))

// function solution(str, ending) {
//     return str.endsWith(ending)
// }

// console.log(solution('abcde', ''))
// console.log(solution('abcde', ''))

// function removeSmallest(numbers) {
//     const min = Math.min(...numbers)
//     const indMin = numbers.indexOf(min)
//     return numbers.filter((_, ind) => ind !== indMin)
// }
// console.log(removeSmallest([132, 229, 247, 361, 9, 297, 349, 106]))

// function calculateYears(principal, interest, tax, desired) {
//     let year = 0
//     for (let i = 1; principal < desired; i++) {
//         principal = principal + (principal * interest) - (principal * interest) * tax
//         year = year + 1
//     }
//     return year
// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100))
// console.log(calculateYears(1000, 0.01625, 0.18, 1200))
// console.log(calculateYears(1000, 0.05, 0.18, 1000))

// function dontGiveMeFive(start, end) {
//     const arr = []
//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return (arr.map(String).filter(el => el.replace(/5/g, '').length === el.length)).length
// }
// console.log(dontGiveMeFive(4, 17))

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)]
// }

// console.log(minMax([2, 6, 8, 1, 9]))

// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function () { return this.name; }
// }

// function declareWinner(fighter1, fighter2, firstAttacker) {

//     while (fighter1.health > 0 && fighter2.health > 0) {
//         if (firstAttacker === fighter1.name) {
//             fighter2.health -= fighter1.damagePerAttack
//             if (fighter2.health > 0) {
//                 fighter1.health -= fighter2.damagePerAttack
//             }
//         } else {
//             fighter1.health -= fighter2.damagePerAttack
//             if (fighter1.health > 0) {
//                 fighter2.health -= fighter1.damagePerAttack
//             }
//         }
//     }
//     return fighter1.health > fighter2.health ? fighter1.name : fighter2.name
// }

// console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))

// function nbDig(n, d) {
//     const arr = []
//     for (let i = 0; i <= n; i++) {
//         if (String(i * i).indexOf(d) !== -1) {
//             arr.push(i * i)
//         }
//     }
//     return arr.join('').split(d).length - 1
// }

// // console.log(nbDig(11011, 2))
// console.log(nbDig(25, 1))
// // console.log(nbDig(5750, 0))

// let number = function (array) {
//     return array.map((el, ind) => `${ind + 1}: ${el}`)
// }
// console.log(number(["a", "b", "c"]))
// console.log(number([]))

// function getDivisorsCnt(n) {
//     const arr = []
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             arr.push(i)
//         }
//     }
//     return arr.length
// }
// console.log(getDivisorsCnt(54))

// function solution(digits) {
//     return [...digits].reduce((acc, el, index, array) => {
//         const newNumber = Number(array.slice(index, index + 5).join(''))
//         return acc = newNumber > acc ? newNumber : acc
//     }, 0)
// }

// console.log(solution('1234567898765'))
// console.log(solution('7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450'))
// console.log(solution('731674765'))

// const sequenceSum = (begin, end, step) => {
//     let acc = 0
//     for (let i = begin; i <= end; i += step) {
//         acc += i
//     }
//     return acc
// }

// console.log(sequenceSum(2, 6, 2))
// console.log(sequenceSum(1, 5, 1))
// console.log(sequenceSum(1, 5, 3))

// function arithmetic(a, b, operator) {
//     const operators = {
//         "add": a + b,
//         "subtract": a - b,
//         "multiply": a * b,
//         "divide": a / b
//     }
//     return operators[operator]
// }
// console.log(arithmetic(8, 2, "subtract"))

// function sortByLength(array) {
//     return array.sort((a, b) => a.length - b.length)
// }
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))

// function findSum(n) {
//     let sum = 0
//     for (let i = 3; i <= 10; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(findSum(10))

// function solve(arr) {
//     return arr.filter((el, index, array) => index === array.lastIndexOf(el))
// }
// console.log(solve([3, 4, 4, 3, 6, 3]))

// function mxdiflg(a1, a2) {
//     if (a1.length < 1 || a2.length < 1) {
//         return -1
//     }
//     const sortA1 = a1.sort((a, b) => a.length - b.length).map(el => el.length)
//     const sortA2 = a2.sort((a, b) => a.length - b.length).map(el => el.length)
//     const maxMin = Math.abs(sortA1[sortA1.length - 1] - sortA2[0])
//     const minMax = Math.abs(sortA2[sortA2.length - 1] - sortA1[0])

//     return maxMin > minMax ? maxMin : minMax
// }
// console.log(mxdiflg([], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

// function factorial(n) {
//     console.log(n)
//     if (n === 0) {
//         return 1
//     }
//     if (n < 0 || n > 12) {
//         throw 'RangeError'
//     }
//     return n === 1 ? 1 : n * factorial(n - 1)
// }
// // console.log(factorial(3))
// // console.log(factorial(0))
// console.log(factorial(-100))

// const fizzbuzz = (n) => [...Array(n)].map((_, i) => {
//     const index = i + 1
//     if (index % 3 === 0 && index % 5 === 0) {
//         return "FizzBuzz"
//     }

//     if (index % 3 === 0) {
//         return "Fizz"
//     }

//     if (index % 5 === 0) {
//         return "Buzz"
//     }
//     return index
// })

// console.log(fizzbuzz(10))

// const gimme = function (inputArray) {
//     console.log(inputArray === inputArray.filter(el => el))
//     return inputArray.indexOf(inputArray.slice(0).sort((a, b) => a - b)[1])
// }
// console.log(gimme([2, 3, 1]))
// console.log(gimme([1, 3, 2]))
// console.log(gimme([3, 2, 1]))

// const isAnagram = function (test, original) {
//     const arrayTest = [...test.toLowerCase()].sort().join()
//     const arrayOriginal = [...original.toLowerCase()].sort().join()
//     return arrayTest === arrayOriginal
// }

// console.log(isAnagram("foefet", "toffee"))
// console.log(isAnagram("Buckethead", "DeathCubeK"))
// console.log(isAnagram("ound", "round"))
// console.log(isAnagram("apple", "pale"))

// function checkExam(array1, array2) {
//     const ball = array1.map((_, ind) => {
//         if (array2[ind] === '') {
//             return 0
//         }
//         if (array1[ind] === array2[ind]) {
//             return 4
//         }
//         if (array1[ind] !== array2[ind]) {
//             return -1
//         }
//     }).reduce((acc, n) => acc + n, 0)
//     return ball > 0 ? ball : 0
// }
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]))

// function capitalize(s) {
//     return [[...s].map((el, index) => index % 2 ? el.toUpperCase() : el).join(''), [...s].map((el, index) => index % 2 ? el : el.toUpperCase()).join('')];
// };
// console.log(capitalize("abcdef"))

// function myLanguages(results) {
//     return Object.entries(results).filter(el => el[1] >= 60).sort((a, b) => b[1] - a[1]).map(el => el[0])
// }
// console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }))
// console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }))

// function sumDigits(number) {
//     return [...String(Math.abs(number))].map(Number).reduce((acc, n) => n + acc, 0)
// }
// console.log(sumDigits(-99))

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
//     const date = new Date(currentDate)
//     const date2 = new Date(expirationDate)
//     return date <= date2 && enteredCode === correctCode
// }
// console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))
// console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))
// console.log(checkCoupon('123a', '123', 'October 5, 2014', 'October 1, 2014'))

//A-Z 65-90
//a-z 97-122

// function solve(s) {
//     const arr = [...s].filter(el => el.charCodeAt() < 97).length
//     return s.length / 2 >= arr ? s.toLowerCase() : s.toUpperCase()
// }
// console.log(solve("code"))
// console.log(solve("CODe"))
// console.log(solve("COde"))
// console.log(solve("Code"))

// function twoOldestAges(ages) {
//     const sortArr = ages.slice().sort((a, b) => a - b)
//     return [sortArr[sortArr.length - 2], sortArr[sortArr.length - 1]]
// }
// console.log(twoOldestAges([1, 2, 10, 8]))

// bsjq", ["bsjq", "qbsj","jqbs", "sjqb", ])

// function containAllRots(str, arr) {
//     return [...str].reduce((acc, _, index) => {
//         acc.push(str.slice(index) + str.slice(0, index))
//         return acc
//     }, []).every(el => arr.includes(el))
// }

// const capitals = function (word) {
//   return [...word]
//     .map((el, index) => {
//       if (el === el.toUpperCase()) {
//         el = index;
//       }
//       return el;
//     })
//     .filter((el) => typeof el === 'number');
// };
// console.log(capitals('CodEWaRs'));

// function evaporator(content, evap_per_day, threshold) {
//   let day = 0;
//   const pers = (content * threshold) / 100;
//   for (let i = 1; pers <= content; i++) {
//     content = content - (content * evap_per_day) / 100;
//     day += 1;
//   }
//   return day;
// }
// console.log(evaporator(10, 10, 10));

// function inAscOrder(arr) {
//   return !arr
//     .map((_, ind, arr) => arr[ind] < arr[ind + 1])
//     .slice(0, -1)
//     .includes(false);
// }
// console.log(inAscOrder([1, 2, 4, 7, 19]));
// console.log(inAscOrder([1, 2, 9, 7, 19]));

// function generateShape(integer) {
//   return [...Array(integer * integer + integer)]
//     .map((el, ind) => (ind % (integer + 1) === 0 ? (el = '\n') : (el = '+')))
//     .slice(1)
//     .join('');
// }
// console.log(generateShape(8));

// let generateShape = (int) =>
//   [...Array(int)].map((_) => '+'.repeat(int)).join('\n');

// function solution(str, ending) {
//   return ending === str.slice(-ending.length)
// }
// console.log(solution('abcde', 'cde'));
// console.log(solution('abcde', 'abc'));

// function smallEnough(a, limit) {
//   return a.every(el => el <= limit)
// }
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))

// function overTheRoad(address, n) {
//   return n * 2 + 1 - address;
// }
// console.log(overTheRoad(1, 3));
// console.log(overTheRoad(4, 3));

// class Cat {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//   }
//   voice() {
//     console.log('Мяу');
//   }
// }

// const cat1 = new Cat({
//   name: 'Mаркиз',
//   age: 13,
// });

// const cat2 = new Cat({
//   name: 'Бусик',
//   age: 5,
// });

// const cat3 = new Cat({
//   name: 'Лиза',
//   age: 8,
// });

// const cat4 = new Cat({
//   name: 'Мотильда',
//   age: 10,
// });

// const cat5 = new Cat({
//   name: 'Марс',
//   age: 7,
// });

// // console.log(cat2);
// // console.log(cat1.age);
// console.log(cat3.voice());
// console.log(String.fromCharCode(100));
// console.log('Ì'.charCodeAt());

// function addLetters(...letters) {
//   if ([...letters].length === 0) {
//     return String.fromCharCode(122);
//   }
//   let number = letters
//     .map((el) => (el = el.charCodeAt() - 96))
//     .reduce((acc, el) => acc + el, 0 + 96);
//   if (number > 122) {
//     for (let i = 1; number > 122; i++) {
//       number -= 26;
//     }
//   }
//   return String.fromCharCode(number);
// }
// console.log(addLetters('i', 's', 'i', 'w', 'r', 'y', 'e'));
// console.log(addLetters());
// // console.log(addLetters('z'));
// // console.log(addLetters('z', 'a'));
// // console.log(addLetters('y', 'c', 'b'));

// function sumOfMinimums(arr) {
//   return arr
//     .map((el) => el.sort((a, b) => a - b)[0])
//     .reduce((acc, n) => acc + n, 0);
// }

// console.log(
//   sumOfMinimums([
//     [1, 2, 3, 4, 5], // minimum value of row is 1
//     [5, 6, 7, 8, 9], // minimum value of row is 5
//     [20, 21, 34, 56, 100],
//   ])
// );

// function removeUrlAnchor(url) {
//  return url.split('#')[0]
// }
// console.log(removeUrlAnchor('www.codewars.com#about'));

// function sumIntervals(intervals) {
//   return [
//     ...new Set(
//       intervals.reduce((acc, el) => {
//         const number = el[1] - el[0];
//         acc = acc.concat([...Array(number)].map((_, index) => index + el[0]));
//         return acc;
//       }, [])
//     ),
//   ].length;
// }

// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ])
// ); // 7
// console.log(
//   sumIntervals([
//     [1, 5],
//     [1, 5],
//   ])
// ); //4

// const palindromeChainLength = (n) => {
//   let numArr = Number(String(n).split('').reverse().join(''));
//   return n === numArr ? 0 : 1 + palindromeChainLength(n + numArr);
// };

// console.log(palindromeChainLength(87));
// console.log(palindromeChainLength(22));

// function findLongest(array) {
//   const elLength = array.map((el) => String(el).length);
//   const max = Math.max(...elLength);
//   const index = elLength.indexOf(max);
//   return array[index];
// }

// console.log(findLongest([1, 10, 100]));
// console.log(findLongest([1, 900, 500]));
// console.log(findLongest([1000, 10, 100]));
// console.log(findLongest([130, 10, 100]));
// console.log(findLongest([60, 10, 100]));

// function helloWorld(name) {
//   let str = 'Hello world';
//   return console.log(str + name);
// }

// console.log(helloWorld(' Ann'));

// function flattenAndSort(array) {
//   return array.reduce((acc, el) => acc.concat(el), []).sort((a, b) => a - b);
// }

// console.log(
//   flattenAndSort([
//     [3, 2, 100],
//     [7, 9, 8],
//     [6, 4, 5],
//   ])
// );
// console.log(flattenAndSort([[], []]));
// console.log(flattenAndSort([[], [1]]));

// function sumStrings(a, b) {
//   return String(BigInt(a) + BigInt(b));
// }

// console.log(sumStrings('123', '456'));

// function factorial(n) {
//   let multy = 1;
//   for (let i = 1; i <= n; i++) {
//     multy = multy * i;
//   }
//   return multy;
// }

// console.log(factorial(7));

// function triangular(n) {
//   return n <= 0
//     ? 0
//     : [...Array(n)].map((_, ind) => ind + 1).reduce((acc, el) => acc + el, 0);
// }

// function triangular(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(triangular(433329420));

// function angle(n) {
//   return (n - 2) * 180;
// }

// console.log(angle(4));

// function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
//   const Arr = [age1, age2, age3, age4, age5, age6, age7, age8].map(
//     (el) => el * el
//   );
//   return Math.floor(Math.sqrt(Arr.reduce((acc, n) => acc + n, 0)) / 2);
// }
// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

// const findDeletedNumber = (arr, mixArr) =>
//   arr.find((el) => !mixArr.includes(el)) || 0;

// // console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
// console.log(
//   findDeletedNumber(
//     [
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//       22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
//       40, 41,
//     ],
//     [
//       19, 17, 12, 35, 11, 40, 33, 1, 38, 29, 15, 20, 14, 27, 8, 36, 37, 24, 30,
//       10, 13, 41, 21, 39, 25, 16, 4, 5, 9, 7, 34, 3, 32, 23, 26, 18, 6, 31, 22,
//       2,
//     ]
//   )
// );

// class Dinglemouse {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`.trim();
//   }
//   static test() {
//     console.log('ggg')
//   }
// }

// console.log(new Dinglemouse('Clint', 'Eastwood').getFullName());
// Dinglemouse.getFullName()

// function twoSort(s) {
//   return s.sort()[0].split('').join('***');
// }
// console.log(
//   twoSort([
//     'bitcoin',
//     'take',
//     'over',
//     'the',
//     'world',
//     'maybe',
//     'who',
//     'knows',
//     'perhaps',
//   ])
// );

// function stringy(size) {
//   return [...Array(size)].map((_, ind) => (ind % 2 === 0 ? 1 : 0)).join('');
// }

// console.log(stringy(3));

// function well(x) {
//   const goodArr = x.filter((el) => el === 'good').length;
//   if (goodArr == 0) {
//     return 'Fail!';
//   }
//   if (goodArr < 3) {
//     return 'Publish!';
//   }
//   return 'I smell a series!';
// }

// console.log(well(['bad', 'bad', 'bad']));
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
// console.log(
//   well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
// );

// function mouthSize(animal) {
//   return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
// }

// console.log(mouthSize('alligator'));
// console.log(mouthSize('ant bear'));

// function toCamelCase(str) {
//   return str.replace(/(_.)|(-.)/g, (x) => x[1].toUpperCase())
// }

// console.log(toCamelCase(''));
// console.log(toCamelCase('the_stealth_warrior'));
// console.log(toCamelCase('The-Stealth-Warrior'));
// console.log(toCamelCase('A-B-C'));

// function list(names) {
//   if (names.length === 0) {
//     return '';
//   }
//   if (names.length === 1) {
//     return names[0].name;
//   }
//   return (
//     names
//       .map((el) => el.name)
//       .slice(0, -1)
//       .join(', ') +
//     ' & ' +
//     names[names.length - 1].name
//   );
// }

// console.log(
//   list([
//     { name: 'Bart' },
//     { name: 'Lisa' },
//     { name: 'Maggie' },
//     { name: 'Homer' },
//     { name: 'Marge' },
//   ])
// );
// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// console.log(list([]));

// function alternateCase(s) {
//   return s.split('').reduce((acc, el) => {
//     const alternateCase =
//       el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
//     return acc + alternateCase;
//   }, '');
// }
// console.log(alternateCase('abc'));
// console.log(alternateCase('ADC'));
// console.log(alternateCase('AdDwC'));

// function solution(str) {}
// console.log(solution('abcdef'));
// console.log(solution('abcdefw'));

// function multiply(a, b) {
//   return (BigInt(a) * BigInt(b)).toString();
// }

// console.log(multiply('11', '85'));

// function toUnderscore(string) {
//   return String(string)
//     .replace(/(.)([A-Z])/g, `$1_$2`)
//     .toLowerCase();
// }

// console.log(toUnderscore('TestController'));
// console.log(toUnderscore(1));

// function createPhoneNumber(numbers) {
//   return numbers.join('').replace(/(...)(...)(....)/g, `($1) $2-$3`);
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// console.log('Ann')

// function sevenAte9(str) {
//   return str.replace(/79(?=7)/g, '7');
// }

// console.log(sevenAte9('97979797'));

// function solve(s) {
//   return Math.max(...s.match(/\d+/g));
// }

// console.log(solve('gh12cdy695m1')); //[ '12', '695', '1' ]

// function domainName(url) {
//   return url.replace(/(.+\/\/)|(www\.)|(\..+)/g, ``);
// }

// function domainName(url) {
//   return url.replace(/(.*\/\/)|(www\.)/g, '').split('.')[0];
// }

// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('www.xakep.ru'));
// console.log(domainName('http://www.codewars.com/kata/'))

// function stringBreakers(n, s) {
//   return s
//     .replace(/\s/g, '')
//     .replace(new RegExp('(.{' + n + '})', 'g'), '$1\n');
// }

// console.log(stringBreakers(5, 'This is an example string'));

// //test

// function formatMoney(amount) {
//   return `$${amount.toFixed(2)}`;
// }
// console.log(formatMoney(39.99));
// console.log(formatMoney(40.1));
// console.log(formatMoney(39.995));

// function multiTable(number) {
//   return `1 * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`;
// }

// function multiTable(number) {
//   return [...Array(10)].map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n');
// }

// console.log(multiTable(5));

// function letterCount(s) {
//   return [...s].reduce((acc, number) => {
//     acc[number]=++acc[number]||1
//     return acc}, {})
// }

// console.log(letterCount("codewars"));

// function isPangram(string) {
//   const arr = string.toLowerCase().replace(/[^a-z]/g, '');
//   return [...new Set(arr)].length === 26;
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

// function count (string) {
//   return [...string].reduce((acc, number) => {
// 		acc[number]= ++acc[number]||1
// 		return acc}, {})
// }

// console.log(count(""))

// function solution(string) {
//   return string.replace(/([A-Z])/g, ' $1');
// }
// console.log(solution('camelCasingTest'));

// var greet = function (name) {
//   return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
// };

// console.log(greet('riley'));
// console.log(greet('rIley'));

// function switcheroo(x) {
//   return x.replace(/(a)|(b)/g, (x) => x === 'a' ? 'b' : 'a');
// }
// console.log(switcheroo('aaabcccbaaa'));

// function switcheroo(x) {
//   return x.replace(/(c)|(b)/g, (x) => x === 'c' ? '*' : 'a');
// }
// console.log(switcheroo('aaabcccbaaa'));

// function wave(str) {
//   return [...Array(str.length)]
//     .map(
//       (_, ind) =>
//         `${str.slice(0, ind)}${str[ind].toUpperCase()}${str.slice(ind + 1)}`
//     )
//     .filter((word) => word !== word.toLowerCase());
// }

// console.log(wave('hello'));
// console.log(wave('m hello'));

// const repeatIt = function (str, n) {
//   return typeof str === 'string' ? str.repeat(n) : 'Not a string';
// };

// console.log(repeatIt(26, 3));

// function divCon(numbers) {
//   return numbers.reduce(
//     (acc, number) => (typeof number === 'string' ? acc - number : acc + number),
//     0
//   );
// }

// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// function expandedForm(num) {
//   return [...String(num)]
//     .reverse()
//     .map((el, index) => el === '0' ? '' : el = el + '0'.repeat(index))
//     .reverse().filter(Boolean)
//     .join(' + ');
// }

// console.log(expandedForm(70304));
// console.log(expandedForm(12));

// function narcissistic(value) {
//   return (
//     [...String(value)]
//       .map((el) => Math.pow(el, String(value).length))
//       .reduce((acc, n) => acc + n, 0) === value
//   );
// }

// console.log(narcissistic(371));

// const words = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10,
//   eleven: 11,
//   twelve: 12,
//   thirteen: 13,
//   fourteen: 14,
//   fifteen: 15,
//   sixteen: 16,
//   seventeen: 17,
//   eighteen: 18,
//   nineteen: 19,
//   twenty: 20,
//   thirty: 30,
//   forty: 40,
//   fifty: 50,
//   sixty: 60,
//   seventy: 70,
//   eighty: 80,
//   ninety: 90,
// };
// const bigValueWords = { hundred: 100, thousand: 1000, million: 1000000 };

// const parseInt = (string) =>
//   string.split(/ |-/g).reduce((acc, word) => {
//     if (words[word]) {
//       acc += words[word];
//     }
//     if (bigValueWords[word]) {
//       const remaindDivision = acc % bigValueWords[word];
//       acc += bigValueWords[word] * remaindDivision - remaindDivision;
//     }
//     return acc;
//   }, 0);

// console.log(parseInt('eighty-three')); // 83

// console.log(
//   parseInt('seven hundred eighty-three thousand nine hundred and nineteen')
// ); // 783919

// const deleteNth = (arr, maxRepeats) =>
//   arr.length
//     ? arr.reduce(
//         (acc, number, index) => {
//           acc.found[number] = ++acc.found[number] || 1;
//           if (acc.found[number] <= maxRepeats) {
//             acc.arr.push(number);
//           }
//           return index === arr.length - 1 ? acc.arr : acc;
//         },
//         { found: {}, arr: [] }
//       )
//     : arr;

// const deleteNth = (arr, maxRepeats, cache = {}) =>
//   arr.filter((number) => {
//     cache[number] = ++cache[number] || 1;
//     return cache[number] <= maxRepeats;
//   });

// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 1));

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const { a, c } = obj; //

// console.log(a, c);

// const arr = [1, 2, 3, 4, 5, 6];

// const [x, y, thirdElement] = arr; //

// console.log(thirdElement);

// let morningList = [
//   'Встать с кровати',
//   'Почистить зубы',
//   'Сделать зарядку',
//   'Позавтракать',
//   'Помыть посуду',
// ];

// for (let i = 0; i < morningList.length; i++) {
//   console.log(morningList[i]);
// }

// function consoleKitten() {
//   let a = '   Λ _ Λ';
//   let b = ' (=චᆽච=)==∫';
//   let c = '   ˉ ˉ   ˉ ˉ';

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// consoleKitten()

// let employee = {
//   firstName: 'Василий',
//   lastName: 'Тёркин',
//   age: 28,
// };

// console.log(employee);

// function getFullName(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`);
// }

// getFullName(employee.firstName, employee.lastName);

// function getFullName(employee) {
//   console.log(`${employee.firstName} ${employee.lastName}`);
// }

// getFullName(employee);

// function findMissingLetter(array) {
//   return String.fromCharCode(array
//     .map((el) => el.charCodeAt())
//     .filter((_, index, array) => array[index + 1] - array[index] !== 1)[0]+1);
// }

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

// const pattern = (n) =>
//   n < 1
//     ? ''
//     : [...Array(n)].map((_, index) => `${++index}`.repeat(index)).join('\n');

// console.log(pattern(5)); // "1\n22\n333\n4444\n55555"

// function findUniq(arr) {
//   return Object.entries(
//     arr.reduce((acc, number) => {
//       acc[number] = ++acc[number] || 1;
//       return acc;
//     }, {})
//   ).filter((el) => el[1] === 1)[0][0];
// }

// const findUniq = (arr) =>
//   arr.reduce((acc, number, index, arr) => {
//     acc[number] = ++acc[number] || 1;
//     return arr.length - 1 === index
//       ? Object.entries(acc).sort((a, b) => a[1] - b[1])[0][0]
//       : acc;
//   }, {});

// console.log(findUniq([3, 10, 10, 10, 3, 3, 3, 9, 9]));

// test1;
// доп изменения

// const bogatyrs = '33 богатыря';
// const knights = '24 рыцаря Круглого стола';
// const spartans = '300 спартанцев';
// const totalHeroes = parseInt(bogatyrs) + parseInt(knights) + parseInt(spartans);

// console.log(totalHeroes);

// const hundred = 100;
// const fiveHundred = 500;

// console.log(String(hundred) + fiveHundred);

// let password = prompt('Введите пароль:');

// if (password === '') {
//   password = prompt('Пароль обязателен и не может быть пустым.');
// }
// |

// const a = [
//   'Гарри Поттер и философский камень',
//   'Гарри Поттер и Тайная комната',
//   'Гарри Поттер и узник Азкабана',
//   'Гарри Поттер и Кубок огня',
//   'Гарри Поттер и Орден феникса',
//   'Гарри Поттер и Принц-полукровка',
//   'Гарри Поттер и Дары смерти',
//   'Гарри Поттер и методы рационального мышления',
// ];

// const b = [];

// a.forEach(function (item) {
//   b.push(item.slice(15));
// });

// console.log(b);

// const characters = [
//   'Люк Скайуокер',
//   'Оби Ван',
//   'Чубакка',
//   'Энакин Скайуокер',
//   'Хан Соло',
//   'Палпатин',
// ];

// const newCharacters = characters.map(function (character) {
//   console.log(character);
//   character === 'Энакин Скайуокер' ? 'Дарт Вейдер' : character;
// });

// console.log(newCharacters);

// const cards = [
//   '6 червей',
//   '7 червей',
//   '8 червей',
//   '9 червей',
//   '10 червей',
//   'Валет червей',
//   'Дама червей',
//   'Король червей',
//   'Туз червей',
//   '6 пик',
//   '7 пик',
//   '8 пик',
//   '9 пик',
//   '10 пик',
//   'Валет пик',
//   'Дама пик',
//   'Король пик',
//   'Туз пик',
//   '6 треф',
//   '7 треф',
//   '8 треф',
//   '9 треф',
//   '10 треф',
//   'Валет треф',
//   'Дама треф',
//   'Король треф',
//   'Туз треф',
//   '6 бубен',
//   '7 бубен',
//   '8 бубен',
//   '9 бубен',
//   '10 бубен',
//   'Валет бубен',
//   'Дама бубен',
//   'Король бубен',
//   'Туз бубен',
// ];

// const cardsFiltered = cards.filter(function (card) {
//   return (card.includes('бубен') || card.includes('червей')) && parseInt(card, 10)
// });

// console.log(cardsFiltered);

// const cat = ['Муся', 'Дуся', 'Дуся кошка'];
// const b = cat.find(function (el) {
//   return el.includes('Дуся');
// });
// console.log(b);

/* нужно дополнить функцию isPrime, принимающую число на вход
и возвращающую true, если число простое, а иначе false */

const integersToCheck = [2, 3, 193, 79, 7, 29];

// /* нужно дополнить функцию isPrime, принимающую число на вход
// и возвращающую true, если число простое, а иначе false */

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// }

// console.log(integersToCheck.every(isPrime));

// /* ниже используйте метод .every() и функцию isPrime,
// чтобы проверить элементы маcсива */

// const chessChampions = [
//   'Вильгельм Стейниц',
//   'Эммануил Ласкер',
//   'Хосе-Рауль Капабланка',
//   'Александр Алехин',
//   'Макс Эйве',
//   'Михаил Ботвинник',
//   'Василий Смыслов',
//   'Михаил Таль',
//   'Тигран Петросян',
//   'Борис Спасский',
//   'Роберт Фишер',
//   'Анатолий Карпов',
//   'Гарри Каспаров',
//   'Владимир Крамник',
//   'Вишванатан Ананд',
//   'Магнус Карлсен',
// ];

// chessChampions.sort(function (a, b) {
//   const aSecondName = a.split(' ')[1].toLowerCase();
//   const bSecondName = b.split(' ')[1].toLowerCase();
//   if (aSecondName > bSecondName) return 1;
//   if (aSecondName < bSecondName) return -1;

//   return 0;
// });

// const obj = {
//   a: 1,
//   b: 2,
// };
// const { b } = obj;

// console.log(b);

// const arr = [1, 2, 3];
// const [tree, one] = arr;

// console.log(one, tree);

// let future;
// const where = prompt(
//   'Куда едешь? Налево, направо или прямо?',
//   ''
// ).toLowerCase();

// switch (where) {
//   case 'налево':
//     future = 'Быть тебе женатым';
//     break;
//   case 'направо':
//     future = 'Быть тебе богатым';
//     break;
//   case 'прямо':
//     future = 'Живым не бывать';
// }

// console.log(future);

// const obj = { arr, integersToCheck };
// console.log(obj);

// const welcomeMessages = {
//   russian: 'Добро пожаловать',
//   english: 'Welcome',
//   french: 'Bienvenue',
//   italian: 'Benvenuto',
//   spanish: 'bienvenido',
//   chinese: '歡迎',
//   finnish: 'Tervetuloa',
// };

// function countLanguages(obj, propsArr) {
//   return propsArr.filter((el) => obj[el]).length;
// }

// console.log(countLanguages(welcomeMessages, ['english', 'french', 'mandarin'])); // 2
// console.log(countLanguages(welcomeMessages, ['russian', 'czech'])); // 1

// const mya = {
//   'бремя': 'burden',
//   'время': 'time',
//   'вымя': 'udder',
//   'мяч': 'ball',
//   'знамя': 'banner',
//   'имя': 'name',
//   'мясо': 'meat',
// };

// Object.keys(mya).forEach((key) => {
// if (key.endsWith('мя')){
//     delete mya[key]
// })})

// console.log(mya);

// function swap(obj) {
//   const res = {};
//   Object.entries(obj).forEach((el) => res[el[1]] = el[0])

//   return res;
// }

// const myObj = {
//   first: 1,
//   second: 2,
//   third: 3,
// };

// console.log(myObj); // { first: 1, second: 2, third: 3 }
// console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }

// function copy(obj) {
//   const copy = {}
//   Object.entries(obj).forEach((el) => copy[el[0]] = el[1])
//   return copy

// }

// const firstObj = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// const secondObj = firstObj;
// const thirdObj = copy(firstObj);

// console.log(firstObj); // { one: 1, three: 3, two: 2 }
// console.log(secondObj); // { one: 1, three: 3, two: 2 }
// console.log(thirdObj); // { one: 1, three: 3, two: 2 }

// firstObj.four = 4;

// console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
// console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// // thirdObj не изменился
// console.log(thirdObj); // { one: 1, three: 3, two: 2 }

// function double(value) {
//   typeof value === 'number'
//     ? console.log(2 * value)
//     : console.log(value.map((el) => 2 * el));
// }
// console.log(double(2)); // 4
// console.log(double([1, 2, 3])); // [2, 4, 6]

// const coverHeading = document.querySelector('.cover__heading');
// const playListTitles = [
//   'Игорь Тальков. Лучшее',
//   'Музыка категории Б',
//   'Подборка с фестиваля FYRE',
// ];

// function getRandomElement(arr) {
//   const randomId = Math.floor(Math.random() * arr.length);
//   return arr[randomId];
// }

// console.log(getRandomElement(playListTitles));
// function doubleClickHandler() {
//   coverHeading.textContent = getRandomElement(playListTitles);
// }

// coverHeading.addEventListener('dblclick', doubleClickHandler);
// coverHeading.removeEventListener('dblclick', doubleClickHandler);

function reverseNumber(n) {
  if (n < 0) {
    return Number(`-${String(n).split('').reverse().slice(0, -1).join('')}`);
  } else if (n > 0) {
    return Number(String(n).split('').reverse().join(''));
  }
  else {
    return n
  }
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));
console.log(reverseNumber(0));
