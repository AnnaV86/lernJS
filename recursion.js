//     при 5
// 1 запуск  5 * 4
// 2 запуск  4 * 3
// 3 запуск  3 * 2
// 4 запуск  2 * 1
// 5 запуск  1 мы достигли точки остановы
// 6 запуск  уже идет в обратном направлении 2 * 1
// 7 запуск  3 * 2
// 8 запуск  4 * 6
// 9 запуск  5 * 24


// 1*2*3*4*5=120
function factorial(number) {
    return number === 1 ? 1 : number * factorial(number - 1)
}

console.log(factorial(5)) // 120



// 4+5+6=15  1+5=6
function digital_root(n) {
    if (String(n).length === 1) {
        return n
    }
    const arrString = String(n).split('').reduce((acc, el) => acc + Number(el), 0)
    return digital_root(arrString)
}
console.log(digital_root(456)) // 6