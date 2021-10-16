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

function solution(digits) {
    return [...digits].reduce((acc, el, index, array) => {
        const newNumber = Number(array.slice(index, index + 5).join(''))
        return acc = newNumber > acc ? newNumber : acc
    }, 0)
}
console.log(solution('1234567898765'))
console.log(solution('7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450'))
console.log(solution('731674765'))