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
  return names.length === 0
    ? 'no one likes this'
    : names.length === 1
    ? names[0] + ' likes this'
    : names.length === 2
    ? `${names[0]}, ${names[1]} like this`
    : names.length === 3
    ? `${names[0]}, ${names[1]}, ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
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

function smallEnough(a, limit) {
  return a.every(el => el <= limit)
}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
